import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import eruda from 'eruda'
import TurnKeyProviderConfig from './turnkey'

eruda.init()
window?.telegram?.WebApp.BiometricManager.init()

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <TurnKeyProviderConfig>
      <App />
    </TurnKeyProviderConfig>
  </StrictMode>,
)
