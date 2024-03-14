import React from 'react'
import './addOrder.css'
import { useNavigate } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import moment from 'moment'
const AddOrder = () => {

    const navigate=useNavigate()

    const handleBack=()=>
    {
        navigate("/order");
    }



    const {register,handleSubmit,formState:{errors}}=useForm();

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
    <div class="main-container">
    <div class="table-container" >
        <div class="table-action back">
            <a onClick={handleBack}> <i class="fa fa-arrow-left"></i> </a>
        </div>
        <div class="table-view">
            <h2>Confirm Order</h2>
            <form onSubmit={handleSubmit(onsubmit)} method='post' >
                <div class="input-wrapper">
                    <input  type="text" id="prodName"  {...register("customerName",{required:true,minLength:3})} f/>
                    {!errors.customerName && <label for="prodName">Customer</label> }
                    {errors.customerName && <label for="prodName" style={{color:'red'}}>Enter valid Customer name</label> }
                </div>
                <div class="input-wrapper">
                    <input type="text" id="prodStatus" autocomplete="off" list="statusList" name="status"  {...register("status",{required:true})} />
                    
                    {!errors.status && <label for="prodStatus">Status</label> }
                    {errors.status && <label for="prodStatus" style={{color:'red'}}>Select valid Status</label> }
                  
                    <datalist id="statusList">
                        <option value='Pending' />
                        <option value='Out for delivery' />
                        <option value='Devlivered' />
                    </datalist>
                    
                </div>
                <div class="input-wrapper">
                    <input type="date" id="prodDate" name="date"  {...register("orderDate",{required:true,valueAsDate:true,min:1})} />
                    {!errors.orderDate && <label for="prodDate">Order date</label> }
                    {errors.orderDate && <label for="prodDate" style={{color:'red'}}>Enter valid date</label> }
                </div>
             
                <div class="input-wrapper submit-wrapper">
                   
                    <button>Create</button>
                </div>
            </form>
        </div>
    </div>
</div>
  )
}

export default AddOrder