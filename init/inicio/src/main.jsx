import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import Social from '../components/Social/index.jsx'
import App from '../components/classBasedComponents/app/index.jsx'
import Membro from '../components/classBasedComponents/membro/index.jsx'
import FeedClass from '../components/classBasedComponents/feed/index.jsx'
import Form from '../components/classBasedComponents/form/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Social name="Igão da massa"/> */}
    <App/>
    {/* <Membro nome="Igor"/> */}
    {/* <FeedClass></FeedClass> */}
    {/* <Form></Form> */}
  </StrictMode>,
)
