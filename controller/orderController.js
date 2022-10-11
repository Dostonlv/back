const Order = require('../models/Order')


// get all services
const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({}).sort({ _id: -1 });
    res.send(orders);
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
}


// add a service
const addOrder = async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    await newOrder.save();
    res.status(200).send({
      message: 'Order Added Successfully!',
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
}

// update a service
const updateOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    order.name = req.body.name || order.name
    order.company = req.body.company || order.company
    order.service = req.body.service || order.service
    order.our_address = req.body.our_address || order.our_address
    order.description = req.body.description || order.description
    order.duration = req.body.duration || order.duration
    order.price = req.body.price || order.price
    order.phone = req.body.phone || order.phone
    order.callback = req.body.callback
    await order.save();

    res.status(200).send({
      message: 'Order Updated Successfully!',
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
}

// delete a service
const deleteOrder = (req, res) => {
  Order.deleteOne({ _id: req.params.id }, (err) => {
    if (err) {
      res.status(500).send({
        message: err.message,
      });
    } else {
      res.status(200).send({
        message: 'Order Deleted Successfully!',
      });
    }
  });
}

module.exports = {
  getAllOrders,
  addOrder,
  updateOrder,
  deleteOrder,
}