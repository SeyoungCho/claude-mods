# session-cost

A Claude Code mod that shows the current session's token usage and USD cost in a band above the prompt.

```
╭──────────────────────────────────────────────────────────────────────────────╮
│ ✻ Session 1.24M tokens   in 12.3k · out 45.1k · cache 1.10M · write 80.2k  hit 92%   $3.42 │
╰──────────────────────────────────────────────────────────────────────────────╯
```

- **USD** comes from Claude Code's own cost ledger, the same total `/cost` shows.
- **Tokens** are summed from every model request (main thread and subagents) from the moment the mod loads, and reset on `/clear`.
- On a subscription plan the dollar figure is a list-price estimate, not a bill.

## Install

At the prompt of a terminal session:

```
/plugin install session-cost --marketplace SeyoungCho/claude-mods
```

From a shell:

```bash
claude plugin install session-cost --marketplace SeyoungCho/claude-mods
```

In the desktop app: click **+** next to the prompt box, then **Plugins**, **Add marketplace** with `SeyoungCho/claude-mods`, then **Add plugin**.

Requires Claude Code v2.1.287 or later (desktop app v2.1.286 or later).
