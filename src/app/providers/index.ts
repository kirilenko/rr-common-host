import compose from 'compose-function'

import { withEnvResolver } from './env-resolver'

export const withProviders = compose(
  withEnvResolver.bind({ env: import.meta.env }),
)

// Remote API:

export type { UseEnvResolver, WithEnvResolver } from './env-resolver'
export { useEnvResolver, withEnvResolver } from './env-resolver'
