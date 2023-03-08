import { FC } from 'react'
import { Global } from '@emotion/react'

import { DemoButton, DemoHeader } from '@shared/ui'
import { useEnvResolver, withProviders } from './providers'

import StyledApp from './styles/app.style'
import GlobalStyles from './styles/global.style'

const App: FC = () => {
  const { getEnv } = useEnvResolver()

  return (
    <>
      <Global styles={GlobalStyles} />
      <StyledApp>
        <DemoHeader title="shared.ui.header" />
        <DemoButton title="shared.ui.button" />
      </StyledApp>
      <div style={{ display: 'none' }}>{getEnv('VITE_TIMESTAMP')}</div>
    </>
  )
}

export default withProviders(App)
