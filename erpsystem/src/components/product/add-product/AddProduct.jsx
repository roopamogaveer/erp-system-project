import React from 'react'
import './addproduct.css'
import { useNavigate } from 'react-router-dom'

const AddProduct = () => {

    const navigate=useNavigate()

    const handleBack=()=>
    {
        navigate(-1);
    }

  return (
    <div class="main-container">
    <div class="table-container" >
        <div class="table-action back">
            <a onClick={handleBack}> <i class="fa fa-arrow-left"></i> </a>
        </div>
        <div class="table-view">
            <h2>Add Product</h2>
            <form >
                <div class="input-wrapper">
                    <input type="text" id="prodName" name="shortname" />
                    <label for="prodName">Short Name</label>
                </div>
                <div class="input-wrapper">
                    <input type="text" id="prodCategory" autocomplete="off" list="categoryList" name="category"  />
                    <label for="prodCategory">Category</label>
                  
                    <datalist id="categoryList">
                        <option  value="something" />
                       
                    </datalist>
                    
                </div>
                <div class="input-wrapper">
                    <input type="text" id="prodBrand" autocomplete="off" list="BrandList" name="brand" />
                    <label for="prodBrand">Brand</label>
                  
                    <datalist id="BrandList">
                        <option  value="something" />
                    </datalist>
                    
                </div>
                <div class="input-wrapper">
                    <input type="date" id="prodStartdate" name="startdate" />
                    <label for="prodStartdate">Start Date</label>
                </div>
                <div class="input-wrapper">
                    <input type="date" id="prodEnddate" name="enddate" />
                    <label for="prodEnddate">End Date</label>
                </div>

                
                <div class="input-wrapper">
                    <input type="number" id="prodPrice" name="price" />
                    <label for="prodPrice">Price</label>
                </div>
                <div class="input-wrapper submit-wrapper">
                   
                    <button>Add</button>
                </div>
            </form>
        </div>
    </div>
</div>
  )
}

export default AddProduct