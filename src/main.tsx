import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import eruda from 'eruda'
import WebApp from '@twa-dev/sdk'
import App from './App'

eruda.init()
WebApp.ready()
WebApp.BiometricManager.init()

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
      <App />
  </StrictMode>,
)
