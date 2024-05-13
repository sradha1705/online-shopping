import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Nav from './components/Nav.jsx'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <Nav/> */}
    {/* < Home/> */}
    {/* < Contact/> */}
  </React.StrictMode>,
)
