import React from 'react'

import './navigation.css'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/" ><i class="fa-solid fa-house-chimney"></i> Home</NavLink>
                </li>
                <li>
                    <NavLink to="/product" ><i class="fa-solid fa-cubes"></i> Products</NavLink>
                </li>
                <li>
                    <NavLink to="/order" ><i class="fa-solid fa-cart-shopping"></i> Orders</NavLink>
                </li>
            </ul>
        </nav>
  )
}

export default Navigation