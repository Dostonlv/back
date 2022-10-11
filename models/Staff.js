const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
  name: {
    type: String, 
    required: true,
  },
  field: {
    type: String,
    required: true,
  },
  poster: {
    type: String,
    required: false,
  },
  since_when: {
    type: String,
    required: false
  },
  degree: {
    type: String,
    required: false
  }
});

const Staff = mongoose.model('staff', staffSchema);

module.exports = Staff;
