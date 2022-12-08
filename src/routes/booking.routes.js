const express = require('express')
const router = express.Router()
//const Building = require('../models/building.model')() // note we need to call the model caching function
const  Booking = require('../models/booking.model')
const CrudController = require('../controllers/crud')
const bookingCrudController = new CrudController(Booking)
// get all products
router.get('/', bookingCrudController.getAll)
// get a product
router.get('/:id', bookingCrudController.getById)
// create a product
router.post('/', bookingCrudController.create)
// update a product
router.put('/:id', bookingCrudController.update)
// remove a product
router.delete('/:id', bookingCrudController.delete)
module.exports = router