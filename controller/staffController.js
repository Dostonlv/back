const Staff = require('../models/Staff')

// get all staff
const getAllStaff = async (req, res) => {
  try {
    const staff = await Staff.find({}).sort({ _id: -1 });
    res.send(staff);
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
}
// add a staff
const addStaff = async (req, res) => {
  try {
    const newStaff = new Staff(req.body);
    await newStaff.save();
    res.status(200).send({
      message: 'Staff Added Successfully!',
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
}
// update a staff
const updateStaff = async (req, res) => {
  try {
    const staff = await Staff.findById(req.params.id);
    staff.name = req.body.name || staff.name
    staff.field = req.body.field || staff.field
    staff.poster = req.body.poster || staff.poster
    staff.since_when = req.body.since_when || staff.since_when
    staff.degree = req.body.degree || staff.degree
    await staff.save();

    res.status(200).send({
      message: 'Staff Updated Successfully!',
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
}
// delete a staff
const deleteStaff = (req, res) => {
  Staff.deleteOne({ _id: req.params.id }, (err) => {
    if (err) {
      res.status(500).send({
        message: err.message,
      });
    } else {
      res.status(200).send({
        message: 'Staff Deleted Successfully!',
      });
    }
  });
}
 
module.exports = {
  getAllStaff,
  addStaff,
  updateStaff,
  deleteStaff,
}
