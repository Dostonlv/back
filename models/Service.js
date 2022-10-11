const mongoose = require('mongoose');

const servicesSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  name: {
    type: String, 
    required: true,
  },
  name_in_eng: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  services_include: [{}],
  price: {
    type: Number,
    required: true
  },
  is_exist: {
    type: Boolean,
    required: false,
  }
});

const Service = mongoose.model('service', servicesSchema);

module.exports = Service;
