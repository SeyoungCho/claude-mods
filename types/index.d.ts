export type Tokens = {
  input: number
  output: number
  cacheRead: number
  cacheWrite: number
  requests: number
  since: number
}

declare module 'claude-code' {
  interface PluginState {
    'session-cost': {
      tokens: Shaped<Tokens | null>
      usd: number | null
    }
  }
}
