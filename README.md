# claude-mods

Small [mods](https://code.claude.com/docs/en/plugins) for Claude Code.

This is an independent personal project. It is not affiliated with, endorsed by, or sponsored by Anthropic. Claude is a trademark of Anthropic, PBC.

[English](#english) · [한국어](#한국어)

---

## English

A mod is a plugin that changes how Claude Code looks and behaves. This repository works as a plugin marketplace named `syc-claude-mods`, so you can install any mod in it by name.

| Mod | What it does | Where it works |
| --- | --- | --- |
| [`session-cost`](./session-cost) | Shows this session's token usage and USD cost (at API list prices) in a band above the prompt | Terminal and the Desktop app's Code tab |

### Install

At the prompt of a terminal session:

```
/plugin install <mod> --marketplace SeyoungCho/claude-mods
```

From a shell:

```bash
claude plugin install <mod> --marketplace SeyoungCho/claude-mods
```

In the Desktop app: click **+** next to the prompt box, then **Plugins**, **Add marketplace** with `SeyoungCho/claude-mods`, then **Add plugin**.

Mods need Claude Code v2.1.287 or later (Desktop app v2.1.286 or later).

---

## 한국어

모드는 Claude Code의 화면과 동작을 바꾸는 플러그인이에요. 이 레포는 `syc-claude-mods`라는 플러그인 마켓플레이스라서 안에 있는 모드를 이름으로 설치할 수 있어요.

| 모드 | 하는 일 | 동작하는 곳 |
| --- | --- | --- |
| [`session-cost`](./session-cost) | 이 세션에서 쓴 토큰 수와 USD 비용(API 정가 기준)을 프롬프트 위 띠에 보여줘요 | 터미널, 데스크톱 앱 Code 탭 |

### 설치

터미널 세션의 프롬프트에서:

```
/plugin install <모드 이름> --marketplace SeyoungCho/claude-mods
```

셸에서:

```bash
claude plugin install <모드 이름> --marketplace SeyoungCho/claude-mods
```

데스크톱 앱에서는 프롬프트 옆 **+** → **Plugins** → **Add marketplace**에 `SeyoungCho/claude-mods`를 넣고 **Add plugin**을 누르면 돼요.

Claude Code v2.1.287 이상(데스크톱 앱 v2.1.286 이상)이 필요해요.
