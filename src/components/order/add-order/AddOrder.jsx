import React from 'react'
import './addOrder.css'
import { useNavigate } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import moment from 'moment'

/*
AddOrder component : 
-- Display the form and handleSubmit after validation
*/
const AddOrder = () => {

    const navigate=useNavigate()

    // redirect to 'order' page
    const handleBack=()=>
    {
        navigate("/order");
    }



    const {register,handleSubmit,formState:{errors}}=useForm();

    // form submit handler
    const onsubmit=(formData)=>
    {
        const order=formData;
        const date=moment(order.orderDate).format('DD-MM-yyyy');
        const data=JSON.parse(localStorage.getItem("data"));
        const products=JSON.parse(localStorage.getItem("cart"));
        let oid=data.order.length;
        ++oid;
        data.order.push({oid,...order,['orderDate']:date,["product"]:products})
        localStorage.setItem("data",JSON.stringify(data));
        handleBack();
    }



  return (
    <div className="main-container">
    <div className="table-container" >
        <div className="table-action back">
            <a onClick={handleBack}> <i className="fa fa-arrow-left"></i> </a>
        </div>
        <div className="table-view">
            <h2>Confirm Order</h2>
            <form onSubmit={handleSubmit(onsubmit)} method='post' >
                <div className="input-wrapper">
                    <input  type="text" id="prodName"  {...register("customerName",{required:true,minLength:3})} />
                    {!errors.customerName && <label htmlFor="prodName">Customer</label> }
                    {errors.customerName && <label htmlFor="prodName" style={{color:'red'}}>Enter valid Customer name</label> }
                </div>
                <div className="input-wrapper">
                    <input type="text" id="prodStatus" autoComplete="off" list="statusList" name="status"  {...register("status",{required:true})} />
                    
                    {!errors.status && <label htmlFor="prodStatus">Status</label> }
                    {errors.status && <label htmlFor="prodStatus" style={{color:'red'}}>Select valid Status</label> }
                  
                    <datalist id="statusList">
                        <option value='Pending' />
                        <option value='Out for delivery' />
                        <option value='Devlivered' />
                    </datalist>
                    
                </div>
                <div className="input-wrapper">
                    <input type="date" id="prodDate" name="date"  {...register("orderDate",{required:true,valueAsDate:true,min:1})} />
                    {!errors.orderDate && <label htmlFor="prodDate">Order date</label> }
                    {errors.orderDate && <label htmlFor="prodDate" style={{color:'red'}}>Enter valid date</label> }
                </div>
             
                <div className="input-wrapper submit-wrapper">
                   
                    <button>Create</button>
                </div>
            </form>
        </div>
    </div>
</div>
  )
}

export default AddOrder