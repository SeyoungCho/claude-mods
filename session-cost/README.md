# session-cost

[English](#english) · [한국어](#한국어)

```
╭────────────────────────────────────────────────────────────────────────────────────────────╮
│ ✻ Session 1.24M tokens   in 12.3k · out 45.1k · cache 1.10M · write 80.2k  hit 92%   $3.42 │
╰────────────────────────────────────────────────────────────────────────────────────────────╯
```

## English

Shows the current session's token usage and USD cost in a band above the prompt.

- **Tokens** are summed from every model request (main thread and subagents) from the moment the mod loads, and reset on `/clear`.
- **hit** is the share of prompt tokens read from the cache.
- It draws beneath any other mod's band, with a blank row between them.

### What the dollar figure means

The **USD** figure comes from Claude Code's own cost ledger, the same total `/cost` shows. It multiplies each request's input, output, cache-read and cache-write tokens by the model's **API list price**.

| Your plan | What `$` means |
| --- | --- |
| API key (pay as you go) | Close to what you are billed. Your Console's Usage page is the real bill |
| Pro or Max subscription | What the session would cost at API prices. You are not charged it; usage counts against your plan's limits instead |

The dollar total covers the whole session, while the token counts start when the mod loads. If you turn the mod on partway through a session, the two won't match.

Works in the terminal and in the Desktop app's Code tab.

### Install

```
/plugin install session-cost --marketplace SeyoungCho/claude-mods
```

In the Desktop app: **+** → **Plugins** → **Add marketplace** with `SeyoungCho/claude-mods` → **Add plugin**.

Requires Claude Code v2.1.287 or later (Desktop app v2.1.286 or later).

## 한국어

현재 세션에서 쓴 토큰 수와 USD 비용을 프롬프트 위 띠에 표시합니다.

- **토큰**은 모드가 로드된 시점부터 모든 모델 요청(메인과 서브에이전트)을 합산합니다. `/clear`하면 초기화됩니다.
- **hit**는 프롬프트 토큰 중 캐시에서 읽은 비율입니다.
- 다른 모드의 띠가 있으면 그 아래에 한 줄 띄우고 그립니다.

### 달러 금액의 의미

**USD**는 Claude Code 자체 비용 기록에서 가져옵니다. `/cost`가 보여주는 값과 같습니다. 요청마다 input, output, cache read, cache write 토큰 수에 해당 모델의 **API 정가**를 곱해서 더한 값입니다.

| 요금제 | `$`가 뜻하는 것 |
| --- | --- |
| API 키 (종량제) | 실제 청구액에 가까운 값입니다. 정확한 청구액은 Console의 Usage 페이지가 기준입니다 |
| Pro / Max 구독 | API 가격으로 썼다면 나왔을 금액입니다. 실제로 청구되지 않고 대신 요금제 한도에서 차감됩니다 |

달러는 세션 전체 누적이고 토큰은 모드가 로드된 뒤부터 셉니다. 세션 중간에 모드를 켜면 둘이 서로 맞지 않을 수 있습니다.

터미널과 데스크톱 앱 Code 탭에서 동작합니다.

### 설치

```
/plugin install session-cost --marketplace SeyoungCho/claude-mods
```

데스크톱 앱: **+** → **Plugins** → **Add marketplace**에 `SeyoungCho/claude-mods` → **Add plugin**.

Claude Code v2.1.287 이상(데스크톱 앱 v2.1.286 이상)이 필요합니다.
