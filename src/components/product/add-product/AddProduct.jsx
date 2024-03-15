import React,{useState,useEffect} from 'react'
import './addproduct.css'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'


/*
AddProduct component : 
-- Display the form and handleSubmit after validation
*/
const AddProduct = () => {

    const navigate=useNavigate()

    // go back to 'product' page 
    const handleBack=()=>
    {
        navigate(-1);
    }

    
    const [categories,setCategories]=useState([]);

    useEffect(()=>{
        setCategories(()=>{ return JSON.parse(localStorage.getItem("data")).category});
    },[]);

    const {register,handleSubmit,formState:{errors}}=useForm();

    // validate and submit the form
    const onsubmit=(formData)=>
    {
        const product=formData;
        const data=JSON.parse(localStorage.getItem("data"));
        let pid=data.product.length;
        ++pid;
        data.product.push({pid,...product})
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
            <h2>Add Product</h2>
            <form onSubmit={handleSubmit(onsubmit)} method='post' noValidate >
                <div className="input-wrapper">
                    <input  type="text" id="prodName"  {...register("name",{required:true,minLength:3})} />
                    {!errors.name && <label htmlFor="prodName">Name</label> }
                    {errors.name && <label htmlFor="prodName" style={{color:'red'}}>Enter valid Name</label> }
                </div>
                <div className="input-wrapper">
                    <input type="text" id="prodCategory" autoComplete="off" list="categoryList" name="category"  {...register("category",{required:true})} />
                    
                    {!errors.category && <label htmlFor="prodCategory">Category</label> }
                    {errors.category && <label htmlFor="prodCategory" style={{color:'red'}}>Select valid Category</label> }
                  
                    <datalist id="categoryList">
                        {
                            categories.map((category)=>
                            {
                                return <option key={category}  value={category} />
                            })
                        }
                        
                       
                    </datalist>
                    
                </div>
                <div className="input-wrapper">
                    <input type="number" id="prodPrice" name="price"  {...register("price",{required:true,valueAsNumber:true,min:1})} />
                    {!errors.price && <label htmlFor="prodPrice">Price</label> }
                    {errors.price && <label htmlFor="prodPrice" style={{color:'red'}}>Enter valid Price</label> }
                </div>
                <div className="input-wrapper">
                    <input type="number" id="prodStock" name="stock"  {...register("stock",{required:true,valueAsNumber:true,min:1})} />
                    {!errors.stock && <label htmlFor="prodStock">Stock</label> }
                    {errors.stock && <label htmlFor="prodStock" style={{color:'red'}}>Enter valid Stock</label> }
                </div>
                <div className="input-wrapper submit-wrapper">
                   
                    <button>Add</button>
                </div>
            </form>
        </div>
    </div>
</div>
  )
}

export default AddProduct