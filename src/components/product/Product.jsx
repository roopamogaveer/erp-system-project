import React, { useState,useEffect } from 'react'
import './product.css'
import { Link, useNavigate } from 'react-router-dom'


/*
Product component : 
-- Display the list of product with delete/edit option. 
*/
const Product = () => {

    const [products,setProducts]=useState([]);

    useEffect(()=>{
        setProducts(()=>{ return JSON.parse(localStorage.getItem("data")).product});
    },[]);


    // delete product
    const handleDelete=(pid)=>
    {
        const data=products;
        data.splice(data.findIndex(p=>p.pid==pid),1);
        localStorage.setItem("data",JSON.stringify({...JSON.parse(localStorage.getItem("data")),["product"]:data}));
        setProducts(()=> [...data]);
    }


  return (
    <div className="main-container" >
            
    <div className="table-container" >
        <div className="table-action add">
            <Link  to="/product/add"><i className="fa-solid fa-circle-plus"></i> Add</Link>
        </div>
        <div className="table-view product-list" >
            <table id="product-data">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                        {
                            products.map((product) =>
                                {
                                    
                                   return  (<tr key={product.pid}>
                                        <td>{product.name}</td>
                                        <td>{product.category}</td>
                                        <td>{product.price}</td>
                                        <td>{product.stock}</td>
                                        <td><Link to={`update/${product.pid}`}  className="a1"> <i className="fa fa-pen"></i> </Link></td>
                                        <td><a  className="a2" onClick={()=>handleDelete(product.pid)}> <i className="fa fa-trash-alt"></i> </a></td>
                                    </tr>)
                                })
                        }
                   
                </tbody>
            </table>
          

            <div  className="card-container">
                
                {
                            products.map((product) =>
                                {
                                    
                                   return  (
                                   <div className="card" key={product.pid} >
                                   <div className="card-name">
                        <h3>{product.name}</h3>
                    </div>
                    <div className="card-category">
                        <p>{product.category}</p>
                    </div>
                    <div className="card-date">
                        <p>Stock : {product.stock}</p>
                    </div>
                    <div className="card-price">
                        <h4>Rs.{product.price}</h4>
                    </div>
                    <div className="card-action">
                    <Link to={`update/${product.pid}`}  className="a1"> <i className="fa fa-pen"></i> </Link>
                    <a  className="a2" onClick={()=>handleDelete(product.pid)}> <i className="fa fa-trash-alt"></i> </a>
                    </div>
                    </div>
                                   )
                                })
                        }
                    
               
            </div>
            
        </div>
    </div>
    
</div>

  )
}

export default Product