import React from 'react'
import { useNavigate } from 'react-router-dom'

import './updateproduct.css'

const UpdateProduct = () => {

    const navigate=useNavigate()

    const handleBack=()=>
    {
        navigate(-1);
    }


  return (
    <div class="main-container">
    <div class="shadow"></div>      
    <div class="table-container" >
        <div class="table-action back">
            <a onClick={handleBack} > <i class="fa fa-arrow-left"></i> </a>
        </div>
        <div class="table-view">
            <h2>Update Product</h2>
            <form>
                <div class="input-wrapper">
                    <input type="text" id="prodName" name="shortname"  />
                    <label for="prodName">Short Name</label>
                </div>
                <div class="input-wrapper">
                    <input type="text" id="prodCategory" autocomplete="off" list="categoryList" name="category" required />
                    <label for="prodCategory">Category</label>
                  
                    <datalist id="categoryList">
                        <option  value="sfds"/>
                       
                    </datalist>
                    
                </div>
                <div class="input-wrapper">
                    <input type="text" id="prodBrand" autocomplete="off" list="BrandList" name="brand" required />
                    <label for="prodBrand">Brand</label>
                  
                    <datalist id="BrandList">
                        <option value="sdf" />
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
                   
                <button type="submit" >Save Changes</button>

                </div>
            </form>
        </div>
    </div>
    
</div>
  )
}

export default UpdateProduct