import { WithRenderLogProvider } from './render-log.model' // - don't use here import from @app/providers
import { RenderLogProvider } from './render-log.provider'

export const withRenderLogProvider: WithRenderLogProvider<{}> = function (
  this,
  Component,
) {
  const { env } = this

  return (props) => (
    <RenderLogProvider {...{ env }}>
      <Component {...props} />
    </RenderLogProvider>
  )
}
