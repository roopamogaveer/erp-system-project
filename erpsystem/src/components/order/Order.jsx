import React, { useState } from 'react'
import './order.css'
import { Link, useNavigate } from 'react-router-dom'

const Order = () => {

  const navigate=useNavigate()



  return (
    <div className="main-container" >
            
    <div className="table-container" >
        <div className="table-action add">
            <Link  to="/order/select"><i class="fa-solid fa-cart-plus"></i> Order now</Link>
        </div>
        <div className="table-view product-list" >
            <table id="product-data">
                <thead>
                    <tr>
                        <th>Short Name</th>
                        <th>Category</th>
                        <th>Brand</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Price</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr >
                        <td>df</td>
                        <td>dg</td>
                        <td>dfg</td>
                        <td>dg</td>
                        <td>dfg</td>
                        <td>dfg</td>
                        <td><Link to="update"  className="a1"> <i className="fa fa-pen"></i> </Link></td>
                        <td><a  className="a2"> <i className="fa fa-trash-alt"></i> </a></td>
                    </tr>
                </tbody>
            </table>

            <div  className="card-container">
                <div className="card">
                    <div className="card-name">
                        <h3>prod.shortname</h3>
                    </div>
                    <div className="card-category">
                        <p>category</p>
                        <p>brand</p>
                    </div>
                    <div className="card-date">
                        <p>startdate</p>
                    </div>
                    <div className="card-price">
                        <h4>price</h4>
                    </div>
                    <div className="card-action">
                        <Link to="update"  className="a1"> <i className="fa fa-pen"></i> </Link>
                        <a  href="" className="a2"> <i className="fa fa-trash-alt"></i> </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

  )
}

export default Order