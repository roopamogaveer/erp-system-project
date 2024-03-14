import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Dashboard from '../dashbord/Dashboard'
import Product from '../product/Product'
import AddProduct from '../product/add-product/AddProduct'
import UpdateProduct from '../product/update-product/UpdateProduct'
import Order from '../order/Order'
import AddOrder from '../order/add-order/AddOrder'
import UpdateOrder from '../order/update-order/UpdateOrder'
import ChooseProduct from '../order/choose-product/ChooseProduct'

const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/product'  >
            <Route path='' element={<Product />} />
            <Route path='add' element={<AddProduct />} />
            <Route path='update/:id' element={<UpdateProduct />} />
        </Route>
        <Route path='/order'  >
            <Route path='' element={<Order />} />
            <Route path='select' element={<ChooseProduct />} />
            <Route path='create' element={<AddOrder />} />
            <Route path='update/:id' element={<UpdateOrder />} />
        </Route>
    </Routes>
  )
}

export default Router