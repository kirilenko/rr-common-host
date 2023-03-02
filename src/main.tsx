import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import { DemoButton, DemoHeader } from './shared/ui'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <DemoHeader title="shared.ui.header" />
    <DemoButton title="shared.ui.button" />
    <div style={{ display: 'none' }}>
      {`shared.host: ${import.meta.env.VITE_TIMESTAMP}`}
    </div>
  </StrictMode>,
)
