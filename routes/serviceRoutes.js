const express = require('express')
const router = express.Router()

const { getAllServices, addService, updateService, deleteSerevice } = require('../controller/serviceController')

// get all services
router.get('/all-services', getAllServices)

// add a service
router.post('/add', addService)

// update a service
router.put('/update/:id', updateService)

// delete a service
router.delete('/delete/:id', deleteSerevice)



module.exports = router