import { useContext } from 'react'

import { RenderLogContext } from './render-log.context'
import { UseRenderLog } from './render-log.model'

export const useRenderLog: UseRenderLog = () => useContext(RenderLogContext)
