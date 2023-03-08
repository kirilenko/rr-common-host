import { useContext } from 'react'

import { EnvResolverContext } from './env-resolver.context'
import { UseEnvResolver } from './env-resolver.model'

export const useEnvResolver: UseEnvResolver = () =>
  useContext(EnvResolverContext)
