const Orders = require('../models/orderschema.js')
const mongoose = require('mongoose')

// get all orders
const AllOrders = async (req, res) => {
    const orders = await Orders.find({}).sort({OrderId: 1})

    res.status(200).json(orders)
}

//get a single order
const Order = async (req, res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({error: 'No order is to be found with the provided id.'})
    }
    const order = await Orders.findById(id)

    if (!order) {
        return res.status(404).json({error: "Order with this id is not to be found"})
    }
    res.status(200).json(order)
}

// create a new order
const createOrder = async (req, res) => {
    const {Order, OrderId, CustomerName, CustomerAddress, DeliveryDate} = req.body
    try {
        const orders = await Orders.create({Order, OrderId, CustomerName, CustomerAddress, DeliveryDate})
        res.status(200).json(orders)
    } catch (error){
        res.status(400).json({error: error.message})
    }
}
// update a single order
const updateOrder = async (req, res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({error: 'No order is to be found with the provided id.'})
    }
    const patchOrder = await Orders.findOneAndUpdate({_id: id}, {...req.body})
    if (!patchOrder) {
        res.status(404).json({error: 'No order is to be found.'})
    }
    res.status(200).json(patchOrder)
}

// delete a single order
const deleteOrder = async (req, res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({error: 'No order is to be found with the provided id.'})
    }
    const dltOrder = await Orders.findOneAndDelete({_id: id})
    if (!dltOrder) {
        res.status(404).json({error: 'No order is to be found.'})
    }
    res.status(200).json(dltOrder)
}

module.exports = {createOrder, AllOrders, Order, deleteOrder, updateOrder}