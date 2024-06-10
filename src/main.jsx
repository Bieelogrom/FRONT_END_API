import React from 'react'
import ReactDOM from 'react-dom/client'
import CadastroCAxios from './CadastroCAxios.jsx'
import Cadastro from './Cadastro.jsx'
import Login from './Login.jsx'
import { GlobalStyle } from './Style.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Cadastro />
    <Login />
    <GlobalStyle/>
  </React.StrictMode>,
)
