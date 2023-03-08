import { Context, createContext } from 'react'

import { EnvResolverContextValue } from './env-resolver.model'

const initialEnvResolverContextValue: EnvResolverContextValue = {
  getEnv: () => null,
}

export const EnvResolverContext = ((): Context<EnvResolverContextValue> =>
  createContext<EnvResolverContextValue>(
    initialEnvResolverContextValue as EnvResolverContextValue,
  ))()
