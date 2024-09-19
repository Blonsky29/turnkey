import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import eruda from 'eruda'
import TurnKeyProviderConfig from './turnkey'
import WebApp from '@twa-dev/sdk'

eruda.init()
WebApp.ready()

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <TurnKeyProviderConfig>
      <App />
    </TurnKeyProviderConfig>
  </StrictMode>,
)
