import React,{useState,useEffect} from 'react'
import './chooseProduct.css'
import { Link } from 'react-router-dom'


/*
ChooseProduct component : 
-- List of product showed to choose for an order
*/
const ChooseProduct = () => {

    const [products,setProducts]=useState([]);

    useEffect(()=>{
        setProducts(()=>{ return JSON.parse(localStorage.getItem("data")).product});
    },[]);


    const [cart,setCart]=useState([]);


    // on selecting product add it to cart
    const handleSelect=(pid)=>
    {
        setCart((prev)=> {return [pid,...prev]});
    }

    // on Deselecting product remove it from cart
    const handleDeselect=(pid)=>
    {
        const data=cart;
        data.splice(data.findIndex(p=>p.pid==pid),1);
        setCart((prev)=>[...data]);
    }

  
    useEffect(()=>
    {
        localStorage.setItem("cart",JSON.stringify(cart));
    },[cart]);



  return (
    <div className="main-container" >
            
    <div className="table-container" >
        <div className="table-action add">
            <Link  to="/order/create"><i className="fa-solid fa-circle-check"></i> Confirm Products</Link>
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
                                       {!cart.find(item=>item == product.pid) && 
                                        <td><a onClick={()=>handleSelect(product.pid)}  className="a1"> <i className="fa-solid fa-circle-plus"></i> </a></td>
                                       }

                                       {cart.find(item=>item == product.pid) && 
                                        <td><a onClick={()=>handleDeselect(product.pid)}  className="a1"> <i style={{color:'red'}} className="fa-solid fa-circle-minus"></i> </a></td>
                                       }
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
                    {!cart.find(item=>item == product.pid) && 
                    <a onClick={()=>handleSelect(product.pid)}  className="a1"> <i className="fa-solid fa-circle-plus"></i> </a>
                    }

                    {cart.find(item=>item == product.pid) && 
                    <a onClick={()=>handleDeselect(product.pid)}  className="a1"> <i style={{color:'red'}} className="fa-solid fa-circle-minus"></i> </a>
                     }

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

export default ChooseProduct