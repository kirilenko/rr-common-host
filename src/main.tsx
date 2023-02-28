import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import { Header } from './shared/ui'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Header title="shared.ui.header" />
  </StrictMode>,
)
