import compose from 'compose-function'

import { withEnvResolverProvider } from './env-resolver'
import { withRenderLogProvider } from './render-log'

export const withProviders = compose(
  withEnvResolverProvider.bind({ env: import.meta.env }),
  withRenderLogProvider.bind({ env: import.meta.env }),
)

// Remote API:

export type { UseEnvResolver, WithEnvResolverProvider } from './env-resolver'
export { useEnvResolver, withEnvResolverProvider } from './env-resolver'

export type { WithRenderLog, WithRenderLogProvider } from './render-log'
export { withRenderLog, withRenderLogProvider } from './render-log'
