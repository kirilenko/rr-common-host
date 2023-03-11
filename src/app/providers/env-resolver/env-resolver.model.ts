import { ComponentType, PropsWithChildren } from 'react'

type EnvResolverState = {}

type EnvResolverActions = {
  getEnv: (p: string) => boolean | null | number | string
}

export type EnvResolverContextValue = EnvResolverState & EnvResolverActions

export type EnvResolverProviderProps = PropsWithChildren<{
  env: ImportMetaEnv
}>

export type UseEnvResolver = () => EnvResolverContextValue

export type WithEnvResolverProvider<Props extends {}> = (
  this: { env: ImportMetaEnv },
  Component: ComponentType<Props>,
) => ComponentType<Props>
