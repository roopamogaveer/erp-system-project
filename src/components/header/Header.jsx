import React from 'react'
import Navigation from './navigation/Navigation'

import './header.css'

/*
Header component : 
-- To show the project heading and Navigation-component
*/
const Header = () => {
  return (
    <header>
        <h1><i className="fa-solid fa-handshake"></i> <span> ERP</span> System</h1>
        <Navigation/>
    </header>
  )
}

export default Header