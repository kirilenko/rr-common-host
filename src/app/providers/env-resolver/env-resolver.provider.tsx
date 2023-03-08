import { FC, useMemo } from 'react'

import { EnvResolverContext } from './env-resolver.context'
import {
  EnvResolverContextValue,
  EnvResolverProviderProps,
} from './env-resolver.model'

export const EnvResolverProvider: FC<EnvResolverProviderProps> = ({
  children,
  env,
}) => {
  type ResolvedEnv = Record<string, string | number | boolean | null>
  const resolvedEnv: ResolvedEnv = useMemo(
    () =>
      Object.keys(env).reduce((acc, envKey) => {
        const value = env[envKey] as string

        if (envKey.includes('_AS_BOOLEAN')) {
          acc[envKey] = value === 'true'
          return acc
        }

        if (envKey.includes('_AS_NUMBER')) {
          acc[envKey] = Number.isNaN(+value) ? null : +value
          return acc
        }

        acc[envKey] = value
        return acc
      }, {} as ResolvedEnv),
    [env],
  )

  const value: EnvResolverContextValue = useMemo(
    () => ({
      getEnv: (key: string) => resolvedEnv[key],
    }),
    [resolvedEnv],
  )

  return (
    <EnvResolverContext.Provider {...{ value }}>
      {children}
    </EnvResolverContext.Provider>
  )
}
