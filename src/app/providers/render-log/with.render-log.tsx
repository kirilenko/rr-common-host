import { WithRenderLog } from './render-log.model' // - don't use here import from @app/providers
import { useRenderLog } from './use.render-log'

export const withRenderLog: WithRenderLog = (Component) => {
  const displayName =
    Component.displayName || Component.name || 'Unknown Component'

  return (props) => {
    useRenderLog()(displayName)()

    return <Component {...props} />
  }
}
