const Contact = require('../models/Contact')


// get all services
const getAllContacts = async (req, res) => {
  try {
    const contact = await Contact.find({}).sort({ _id: -1 });
    res.send(contact);
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
}


// add a service
const addContact = async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(200).send({
      message: 'Contact Added Successfully!',
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
}

// update a service
const updateContact = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    contact.name = req.body.name || contact.name
    contact.phone = req.body.phone || contact.phone
    contact.text = req.body.text || contact.text
    contact.callback = req.body.callback
    await contact.save();

    res.status(200).send({
      message: 'Contact Updated Successfully!',
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
}

// delete a service
const deleteContact = (req, res) => {
  Contact.deleteOne({ _id: req.params.id }, (err) => {
    if (err) {
      res.status(500).send({
        message: err.message,
      });
    } else {
      res.status(200).send({
        message: 'Contact Deleted Successfully!',
      });
    }
  });
}

module.exports = {
  getAllContacts,
  addContact,
  updateContact,
  deleteContact,
}