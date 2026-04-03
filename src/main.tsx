import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import { applyTheme } from './components/ThemeSwitcher'

// Restore theme from localStorage (anti-flash)
const savedTheme = localStorage.getItem('mecanics-theme') || 'sky'
const savedDark = localStorage.getItem('mecanics-dark') === 'true'
applyTheme(savedTheme, savedDark)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
