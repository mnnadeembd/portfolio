import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './assets/css/style.css'
import './assets/css/GlowEffect.css'
import './assets/css/MagneticButton.css'
import './assets/css/ScrollTopButton.css'
import './assets/css/AdminPanel.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
