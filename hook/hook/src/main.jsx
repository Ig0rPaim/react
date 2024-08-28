import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import FrasesInput from'./components/frasesInput/index.jsx'
import Nutricao from './components/nutrucicao/index.jsx'
import Rotas from './components/routes/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <FrasesInput></FrasesInput> */}
    {/* <Nutricao></Nutricao> */}
    <Rotas></Rotas>
  </StrictMode>,
)
