const express = require('express')
const router = express.Router()

const { getAllOrders, addOrder, updateOrder, deleteOrder } = require('../controller/orderController')

// get all orders
router.get('/all-orders', getAllOrders)

// add a order
router.post('/add', addOrder)

// update a order
router.put('/update/:id', updateOrder)

// delete a order
router.delete('/delete/:id', deleteOrder)

module.exports = router