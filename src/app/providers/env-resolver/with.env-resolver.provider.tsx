import { WithEnvResolverProvider } from './env-resolver.model' // - don't use here import from @app/providers
import { EnvResolverProvider } from './env-resolver.provider'

export const withEnvResolverProvider: WithEnvResolverProvider<{}> = function (
  this,
  Component,
) {
  const { env } = this

  return (props) => (
    <EnvResolverProvider {...{ env }}>
      <Component {...props} />
    </EnvResolverProvider>
  )
}
