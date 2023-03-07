import { FC } from 'react'
import { Global } from '@emotion/react'

import { DemoButton, DemoHeader } from '@shared/ui'

import StyledApp from './styles/app.style'
import GlobalStyles from './styles/global.style'

const App: FC = () => (
  <>
    <Global styles={GlobalStyles} />
    <StyledApp>
      <DemoHeader title="shared.ui.header" />
      <DemoButton title="shared.ui.button" />
    </StyledApp>
    <div style={{ display: 'none' }}>
      {`common.host: ${import.meta.env.VITE_TIMESTAMP}`}
    </div>
  </>
)

export default App
