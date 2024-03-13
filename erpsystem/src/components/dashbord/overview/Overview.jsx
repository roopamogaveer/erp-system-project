import React from 'react'
import Details from '../details/Details'

import './overview.css'

function Overview() {
  return (
    <div class="overview">
            <h2>Over<span>view</span></h2>
            <div class="overview_card_container">
               <Details/>
               <Details/>
            </div>
            <div class="feature">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque vero voluptas cumque velit cum, harum quisquam vitae dolore voluptate consectetur eum, ducimus eius iste cupiditate hic recusandae facilis quibusdam at.</p>
            </div>
   </div>
  )
}

export default Overview