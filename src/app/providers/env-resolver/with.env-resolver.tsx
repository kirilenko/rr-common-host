import { WithEnvResolver } from './env-resolver.model'
import { EnvResolverProvider } from './env-resolver.provider'

export const withEnvResolver: WithEnvResolver<{}> = function (this, Component) {
  const { env } = this

  return (props) => (
    <EnvResolverProvider {...{ env }}>
      <Component {...props} />
    </EnvResolverProvider>
  )
}
