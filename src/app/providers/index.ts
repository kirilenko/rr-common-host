import compose from 'compose-function'

import { withEnvResolver } from './env-resolver'
import { withRenderLogProvider } from './render-log'

export const withProviders = compose(
  withEnvResolver.bind({ env: import.meta.env }),
  withRenderLogProvider.bind({ env: import.meta.env }),
)

// Remote API:

export type { UseEnvResolver, WithEnvResolver } from './env-resolver'
export { useEnvResolver, withEnvResolver } from './env-resolver'

export type { WithRenderLog, WithRenderLogProvider } from './render-log'
export { withRenderLog, withRenderLogProvider } from './render-log'
