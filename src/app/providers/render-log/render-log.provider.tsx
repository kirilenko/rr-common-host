import { FC, useMemo } from 'react'

import { RenderLogContext } from './render-log.context'
import { getRenderLog } from './render-log.features'
import {
  RenderLogContextValue,
  RenderLogProviderProps,
} from './render-log.model'

export const RenderLogProvider: FC<RenderLogProviderProps> = ({
  children,
  env,
}) => {
  const value: RenderLogContextValue = useMemo<RenderLogContextValue>(() => {
    const debugLogEnabled = env.MODE !== 'production'
    if (!debugLogEnabled) {
      return () => () => {}
    }

    const isInBuild = env.MODE !== 'development'
    return (displayName: string) =>
      getRenderLog({ cacheKey: displayName, isInBuild })
  }, [env.MODE])

  return (
    <RenderLogContext.Provider {...{ value }}>
      {children}
    </RenderLogContext.Provider>
  )
}
