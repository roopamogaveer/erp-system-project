import React,{useEffect} from 'react'
import Details from '../details/Details'

import './overview.css'
import mockdata from './../../../data.json'

/*
Overview component : 
-- To show the project overview with Details-component
*/
const Overview=()=> {


  let productCount;
  let  orderCount;


//   if data is not avaible  then load the data into localStorage from data.json file. Else read from localStorage 
      if(!localStorage.getItem("data"))
      {
        localStorage.setItem("data",JSON.stringify(mockdata));
         productCount=mockdata.product.length;
         orderCount=mockdata.order.length;
      }
      else 
      {
         productCount=JSON.parse(localStorage.getItem("data")).product.length;
         orderCount=JSON.parse(localStorage.getItem("data")).order.length;
      }


  


  return (
    <div className="overview">
            <h2>Over<span>view</span></h2>
            <div className="overview_card_container">
               <Details count={productCount} type="Product" />
               <Details count={orderCount} type="Order" />
            </div>
            <div className="feature">
                <p>Explore products and manage orders with respective menu and button given above. User-friendly order details showing in Calender view to make ease of the application. You can click on the date to view the deliverable orders on that particular day.</p>
            </div>
   </div>
  )
}

export default Overview