const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  company: {
    type: String, 
    required: true,
  },
  service: [{}],
  our_address: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: false,
  },
  price: {
    type: Number,
    required: false,
  },
  phone: {
    type: String,
    required: false,
  },
  created_at: {
    type: Date,
    required: false
  },
  callback: {
    type: Boolean,
    required: true,
    default: false
  }
});

const Order = mongoose.model('order', orderSchema);

module.exports = Order;
