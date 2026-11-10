import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import texturaFolhas from './assets/marca/textura-folhas.webp'

// Textura de folhas da marca, usada pela classe .fundo-folhas (index.css)
document.documentElement.style.setProperty('--textura-folhas', `url(${texturaFolhas})`)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
