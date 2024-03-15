import React, { useEffect, useState } from 'react'

import './details.css'
import { useNavigate } from 'react-router-dom'

/*
Details component : 
-- To show the order and product count/stats 
*/
const Details = (props) => {

  const navigate=useNavigate()

  const [propsValue,setPropsvalue]=useState(props);


  useEffect(()=>
  {
      setPropsvalue(()=>{return propsValue});
      
  },[props]);



// action for click on Manage or Explore button on dashboard 
  const handleClick=()=>
  {
    propsValue.type=="Product" ? navigate("/product") : navigate("/order")
  }

  return (
    <div className="overview_card">
        <div className="details">
            <h4>{propsValue.count}</h4>
            <span></span>
            <p>{propsValue.type}</p>
        </div>
        <button onClick={handleClick}>
            {propsValue.type=="Product"? "Explore":"Manage"} 
            <i className="fa-solid fa-arrow-right" ></i>
        </button>
    </div>
  )
}

export default Details