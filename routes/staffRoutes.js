const express = require('express')
const router = express.Router()

const { getAllStaff, addStaff, updateStaff, deleteStaff } = require('../controller/staffController')

// get all staff 
router.get('/all-staff', getAllStaff)

// add a staff
router.post('/add', addStaff)

// update a staff
router.put('/update/:id', updateStaff)

// delete a staff
router.delete('/delete/:id', deleteStaff)


module.exports = router