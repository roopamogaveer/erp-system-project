import React, { useState,useEffect } from 'react'
import './order.css'
import { Link, useSearchParams } from 'react-router-dom'
import moment from 'moment'

/*
Order component : 
-- Display the list of order with delete/edit option. 
*/
const Order = () => {


  const [orders,setOrders]=useState([]);

  const [searchParams,setSearchParams]=useSearchParams();

  useEffect(()=>{
       if(searchParams.get("date") )
       {
            const dateParam=searchParams.get("date").split("-");
            const date=moment(new Date(parseInt(dateParam[2]),parseInt(dateParam[1])-1,parseInt(dateParam[0]))).format('DD-MM-yyyy');
            setOrders(()=>{ return JSON.parse(localStorage.getItem("data")).order.filter(order=>order.orderDate==date)});
       }
       else 
       {
            setOrders(()=>{ return JSON.parse(localStorage.getItem("data")).order});
       }

       
      
  },[]);


// delete order
  const handleDelete=(oid)=>
  {
      const data=orders;
      data.splice(data.findIndex(p=>p.oid==oid),1);
      localStorage.setItem("data",JSON.stringify({...JSON.parse(localStorage.getItem("data")),["order"]:data}));
      setOrders(()=> [...data]);
  }


  return (
    <div className="main-container" >
            
    <div className="table-container" >
        <div className="table-action add">
            <Link  to="/order/select"><i className="fa-solid fa-cart-plus"></i> Order now</Link>
        </div>
        <div className="table-view product-list" >
        <table id="product-data">
                <thead>
                    <tr>
                        <th>Customer name</th>
                        <th>Order date</th>
                        <th>status</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                        {
                            orders.map((order) =>
                                {
                                    
                                   return  (<tr key={order.oid}>
                                        <td>{order.customerName}</td>
                                        <td>{order.orderDate}</td>
                                        <td>{order.status}</td>
                                        <td><Link to={`update/${order.oid}`}  className="a1"> <i className="fa fa-pen"></i> </Link></td>
                                        <td><a  className="a2" onClick={()=>handleDelete(order.oid)}> <i className="fa fa-trash-alt"></i> </a></td>
                                    </tr>)
                                })
                        }
                   
                </tbody>
            </table>
          

            <div  className="card-container">
                
                {
                             orders.map((order) =>
                                {
                                    
                                   return  (
                                   <div className="card" key={order.oid} >
                                   <div className="card-name">
                        <h3>{order.customerName}</h3>
                    </div>
                    <div className="card-category">
                        <p>{order.orderDate}</p>
                    </div>
                  
                    <div className="card-price">
                        <h4>Rs.{order.status}</h4>
                    </div>
                    <div className="card-action">
                    <Link to={`update/${order.oid}`}  className="a1"> <i className="fa fa-pen"></i> </Link>
                    <a  className="a2" onClick={()=>handleDelete(order.oid)}> <i className="fa fa-trash-alt"></i> </a>
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

export default Order