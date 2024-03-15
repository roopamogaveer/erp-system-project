import React from 'react'

import './navigation.css'
import { NavLink } from 'react-router-dom'


/*
Navigation component : 
-- To show the project navigation bar
*/
const Navigation = () => {
  return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/" ><i className="fa-solid fa-house-chimney"></i> Home</NavLink>
                </li>
                <li>
                    <NavLink to="/product" ><i className="fa-solid fa-cubes"></i> Products</NavLink>
                </li>
                <li>
                    <NavLink to="/order" ><i className="fa-solid fa-cart-shopping"></i> Orders</NavLink>
                </li>
            </ul>
        </nav>
  )
}

export default Navigation