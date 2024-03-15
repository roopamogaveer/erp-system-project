import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import moment from 'moment'

import './updateOrder.css'

/*
UpdateOrder component : 
-- Display the form with order to be updated; validaton and handle submit. 
*/
const UpdateOrder = () => {

    const navigate=useNavigate()

    // redirect to 'order' page
    const handleBack=()=>
    {
        navigate("/order");
    }

    const {register,handleSubmit,formState:{errors}}=useForm();

    
    const {id}=useParams()
    const currentOrder=JSON.parse(localStorage.getItem("data")).order.filter(order=>order.oid==id)[0];
    currentOrder.orderDate=currentOrder.orderDate.split("-").reverse().join("-");


    // validate and submit
    const onsubmit=(formData)=>
    {
        const order=formData;
        const date=moment(order.orderDate).format('DD-MM-yyyy');
        const data=JSON.parse(localStorage.getItem("data"));
        data.order.splice(data.order.findIndex(o=>o.oid==id),1,{oid:id,...order,['orderDate']:date});
        localStorage.setItem("data",JSON.stringify(data));
        handleBack();
    }


  return (
    <div className="main-container">
    <div className="shadow"></div>      
    <div className="table-container" >
        <div className="table-action back">
            <a onClick={handleBack} > <i className="fa fa-arrow-left"></i> </a>
        </div>
        <div className="table-view">
            <h2>Update Order</h2>
            <form onSubmit={handleSubmit(onsubmit)} method='post' >
                <div className="input-wrapper">
                    <input  type="text" id="prodName"  {...register("customerName",{required:true,minLength:3,value:currentOrder.customerName})} />
                    {!errors.customerName && <label htmlFor="prodName">Customer</label> }
                    {errors.customerName && <label htmlFor="prodName" style={{color:'red'}}>Enter valid Customer name</label> }
                </div>
                <div className="input-wrapper">
                    <input type="text" id="prodStatus" autoComplete="off" list="statusList" name="status"  {...register("status",{required:true,value:currentOrder.status})} />
                    
                    {!errors.status && <label htmlFor="prodStatus">Status</label> }
                    {errors.status && <label htmlFor="prodStatus" style={{color:'red'}}>Select valid Status</label> }
                  
                    <datalist id="statusList">
                        <option value='Pending' />
                        <option value='Out for delivery' />
                        <option value='Devlivered' />
                    </datalist>
                    
                </div>
                <div className="input-wrapper">
                    <input type="date" id="prodDate" name="date" defaultValue={currentOrder.orderDate}  {...register("orderDate",{required:true,valueAsDate:true})} />
                    {!errors.orderDate && <label htmlFor="prodDate">Order date</label> }
                    {errors.orderDate && <label htmlFor="prodDate" style={{color:'red'}}>Enter valid date</label> }
                </div>
             
                <div className="input-wrapper submit-wrapper">
                   
                    <button>Save Changes</button>
                </div>
            </form>
        </div>
    </div>
    
</div>
  )
}

export default UpdateOrder