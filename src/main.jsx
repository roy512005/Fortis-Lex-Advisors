// @ts-nocheck
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/css/Style.css'
import './assets/css/responsive.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter} from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
       <App />
    </BrowserRouter>
  </React.StrictMode>,
)
