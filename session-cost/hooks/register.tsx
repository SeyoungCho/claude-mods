import { atom, read, update } from "claude-code";
import type { Register, TurnUsage } from "claude-code";

import type { Tokens } from "../types";

const tokens = atom({ plugin: "session-cost", key: "tokens" } as const, null, {
  shape: "tokens-1",
});
const usd = atom({ plugin: "session-cost", key: "usd" } as const, null);

const empty = (since: number): Tokens => ({
  input: 0,
  output: 0,
  cacheRead: 0,
  cacheWrite: 0,
  requests: 0,
  since,
});

// Whether a drawing handed up by next(e) shows anything: the engine's own
// node (what an empty band resolves to) and empty Boxes show nothing.
const shows = (node: unknown): boolean => {
  if (node === null || node === undefined || node === false) return false;
  if (typeof node === "string") return node.trim() !== "";
  if (typeof node === "number" || node === true) return true;
  if (Array.isArray(node)) return node.some(shows);
  if (typeof node !== "object") return false;
  const el = node as {
    type?: string;
    props?: Record<string, unknown>;
    children?: unknown[];
  };
  if (el.type === "engine") return false;
  if (el.type === "Box")
    return Boolean(el.props?.borderStyle) || (el.children ?? []).some(shows);
  return true;
};

const fmt = (n: number): string =>
  n >= 1e6
    ? (n / 1e6).toFixed(2) + "M"
    : n >= 1e3
      ? (n / 1e3).toFixed(1) + "k"
      : String(n);

export const register: Register = (on) => {
  on("session.start", async ($, e, next) => {
    const u = await $.session.usage();
    // A /clear starts the session over at a new startedAt: start the count over too.
    await update($, tokens, (t) =>
      t && t.since === u.startedAt ? t : empty(u.startedAt),
    );
    await update($, usd, () => u.cost?.usd ?? null);

    return next(e);
  });

  // Every model request, the main thread's and each subagent's.
  on("turn.step", async function* ($, e, next) {
    const res = yield* next(e);
    const use: TurnUsage | null = res.usage;
    if (use) {
      await update($, tokens, (t) => {
        const base = t ?? empty(0);
        return {
          ...base,
          input: base.input + use.input_tokens,
          output: base.output + use.output_tokens,
          cacheRead: base.cacheRead + use.cache_read_input_tokens,
          cacheWrite: base.cacheWrite + use.cache_creation_input_tokens,
          requests: base.requests + 1,
        };
      });
    }

    return res;
  });

  // The engine's own cost ledger, the same total /cost shows.
  on("session.measure", async ($, e, next) => {
    if (e.cost) {
      const v = e.cost.usd;
      await update($, usd, () => v);
    }

    return next(e);
  });

  on("ui.render", { component: "AbovePrompt" }, async ($, e, next) => {
    if (e.props.hasSurvey) return next(e);

    // What the plugins beneath (and the engine) draw here, kept so their bands still show.
    const below = await next(e);
    const t = await read($, tokens);
    const cost = await read($, usd);
    const { Box, Text } = $.ui.resolve(e);
    const input = t?.input ?? 0;
    const output = t?.output ?? 0;
    const cacheRead = t?.cacheRead ?? 0;
    const cacheWrite = t?.cacheWrite ?? 0;
    const total = input + output + cacheRead + cacheWrite;
    const promptSide = input + cacheRead + cacheWrite;
    const hit =
      promptSide > 0 ? Math.round((cacheRead / promptSide) * 100) : null;

    const chip = (label: string, value: string, color: string) => (
      <Text>
        <Text color="subtle">{label} </Text>
        <Text color={color} bold tabular>
          {value}
        </Text>
      </Text>
    );
    const dot = <Text color="subtle"> · </Text>;

    const mine = (
      <Box
        borderStyle="round"
        borderColor="claude"
        paddingX={1}
        marginTop={shows(below) ? 1 : 0}
        flexDirection="row"
        justifyContent="space-between"
        flexWrap="wrap"
      >
        <Text>
          <Text color="claude" bold>
            ✻ Session{" "}
          </Text>
          <Text color="suggestion" bold tabular>
            {fmt(total)}
          </Text>
          <Text color="subtle">{" tokens   "}</Text>
          {chip("in", fmt(input), "text")}
          {dot}
          {chip("out", fmt(output), "text")}
          {dot}
          {chip("cache", fmt(cacheRead), "text")}
          {dot}
          {chip("write", fmt(cacheWrite), "text")}
          {hit !== null && (
            <Text>
              <Text color="subtle">{"  "}hit </Text>
              <Text color="text" bold tabular>
                {hit}%
              </Text>
            </Text>
          )}
        </Text>
        <Text color="success" bold tabular>
          {cost === null ? "$ —" : "$" + cost.toFixed(2)}
        </Text>
      </Box>
    );

    return (
      <Box flexDirection="column">
        {below}
        {mine}
      </Box>
    );
  });
};
