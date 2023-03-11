import { ComponentType, PropsWithChildren } from 'react'

export type RenderLogContextValue = (
  displayName: string,
) => (...p: unknown[]) => void

export type RenderLogProviderProps = PropsWithChildren<{
  env: ImportMetaEnv
}>

export type UseRenderLog = () => RenderLogContextValue

export type WithRenderLogProvider<Props extends {}> = (
  this: { env: ImportMetaEnv },
  Component: ComponentType<Props>,
) => ComponentType<Props>

export type WithRenderLog = <Props extends {}>(
  Component: ComponentType<Props>,
) => ComponentType<Props>
