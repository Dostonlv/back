const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: {
    type: String, 
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: false,
  },
  created_at: {
    type: Date,
    required: false
  },
  callback: {
    type: Boolean,
    required: false,
    default: false
  }
});

const Contact = mongoose.model('contact', contactSchema);

module.exports = Contact;
