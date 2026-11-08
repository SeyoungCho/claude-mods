# session-cost

[English](#english) · [한국어](#한국어)

```
╭────────────────────────────────────────────────────────────────────────────────────────────╮
│ ✻ Session 1.24M tokens   in 12.3k · out 45.1k · cache 1.10M · write 80.2k  hit 92%   $3.42 │
╰────────────────────────────────────────────────────────────────────────────────────────────╯
```

## English

Shows the current session's token usage and USD cost in a band above the prompt.

- **USD** comes from Claude Code's own cost ledger, the same total `/cost` shows.
- **Tokens** are summed from every model request (main thread and subagents) from the moment the mod loads, and reset on `/clear`.
- **hit** is the share of prompt tokens read from the cache.
- On a subscription plan the dollar figure is a list-price estimate, not a bill.
- It draws beneath any other mod's band, with a blank row between them.

Works in the terminal and in the Desktop app's Code tab.

### Install

```
/plugin install session-cost --marketplace SeyoungCho/claude-mods
```

In the Desktop app: **+** → **Plugins** → **Add marketplace** with `SeyoungCho/claude-mods` → **Add plugin**.

Requires Claude Code v2.1.287 or later (Desktop app v2.1.286 or later).

## 한국어

이 세션에서 쓴 토큰 수와 USD 비용을 프롬프트 위 띠에 보여줘요.

- **USD**는 Claude Code 자체 비용 기록에서 가져와요. `/cost`가 보여주는 값과 같아요.
- **토큰**은 모드가 로드된 시점부터 모든 모델 요청(메인과 서브에이전트)을 합산해요. `/clear`하면 초기화돼요.
- **hit**는 프롬프트 토큰 중 캐시에서 읽은 비율이에요.
- 구독 요금제에서는 달러 금액이 정가 기준 추정치이고, 실제 청구액이 아니에요.
- 다른 모드의 띠가 있으면 그 아래에 한 줄 띄우고 그려요.

터미널과 데스크톱 앱 Code 탭에서 동작해요.

### 설치

```
/plugin install session-cost --marketplace SeyoungCho/claude-mods
```

데스크톱 앱: **+** → **Plugins** → **Add marketplace**에 `SeyoungCho/claude-mods` → **Add plugin**.

Claude Code v2.1.287 이상(데스크톱 앱 v2.1.286 이상)이 필요해요.
