import React from 'react'
import Navigation from './navigation/Navigation'

import './header.css'

const Header = () => {
  return (
    <header>
        <h1><i class="fa-solid fa-handshake"></i> <span> ERP</span> System</h1>
        <Navigation/>
    </header>
  )
}

export default Header