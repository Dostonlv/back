const Service = require('../models/Service')


// get all services
const getAllServices = async (req, res) => {
  try {
    const services = await Service.find({}).sort({ _id: -1 });
    res.send(services);
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
}


// add a service
const addService = async (req, res) => {
  try {
    const newService = new Service(req.body);
    await newService.save();
    res.status(200).send({
      message: 'Service Added Successfully!',
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
}

// update a service
const updateService = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    service.type = req.body.type || service.type
    service.name = req.body.name || service.name
    service.name_in_eng = req.body.name_in_eng || service.name_in_eng
    service.description = req.body.description || service.description
    service.services_include = req.body.services_include || service.services_include
    service.price = req.body.price || service.price
    service.is_exist = req.body.is_exist
    await service.save();

    res.status(200).send({
      message: 'Service Updated Successfully!',
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
}

// delete a service
const deleteSerevice = (req, res) => {
  Service.deleteOne({ _id: req.params.id }, (err) => {
    if (err) {
      res.status(500).send({
        message: err.message,
      });
    } else {
      res.status(200).send({
        message: 'Service Deleted Successfully!',
      });
    }
  });
}

module.exports = {
  getAllServices,
  addService,
  updateService,
  deleteSerevice,
}