const express = require('express')
const router = express.Router()


const { getAllContacts, addContact, updateContact, deleteContact } = require('../controller/contactController')

// get all contacts
router.get('/all-contacts', getAllContacts)

// add a contact
router.post('/add', addContact)

// update a contact
router.put('/update/:id', updateContact)

// delete a contact
router.delete('/delete/:id', deleteContact)

module.exports = router