import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

// ts alerta que document.getElementById('root') pode ser null (não existir a div la no index.html)
// para resolver isso, basta adicionar o operador de negação ! no final da expressão

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)