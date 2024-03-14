import React, { useEffect, useState } from 'react'

import './details.css'
import { useNavigate } from 'react-router-dom'


const Details = (props) => {

  const navigate=useNavigate()

  const [propsValue,setPropsvalue]=useState(props);


  useEffect(()=>
  {
      setPropsvalue(()=>{return propsValue});
      
  },[props]);




  const handleClick=()=>
  {
    propsValue.type=="Product" ? navigate("/product") : navigate("/order")
  }

  return (
    <div class="overview_card">
        <div class="details">
            <h4>{propsValue.count}</h4>
            <span></span>
            <p>{propsValue.type}</p>
        </div>
        <button onClick={handleClick}>
            {propsValue.type=="Product"? "Explore":"Manage"} 
            <i class="fa-solid fa-arrow-right" ></i>
        </button>
    </div>
  )
}

export default Details