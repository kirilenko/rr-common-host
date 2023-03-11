import { useContext } from 'react'

import { EnvResolverContext } from './env-resolver.context'
import { UseEnvResolver } from './env-resolver.model' // - don't use here import from @app/providers

export const useEnvResolver: UseEnvResolver = () =>
  useContext(EnvResolverContext)
