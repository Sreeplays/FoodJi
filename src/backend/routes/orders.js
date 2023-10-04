const express = require('express')
const {createOrder, AllOrders, Order, deleteOrder, updateOrder} = require('../controllers/orderscontroller.js')
const routes = express.Router()

// get all orders
routes.get('/', AllOrders)
//get a single order
routes.get('/:id',Order)
// post an order
routes.post('/', createOrder)

// delete an order
routes.delete('/:id', deleteOrder)
// update an order
routes.patch('/:id', updateOrder) 

module.exports = routes;