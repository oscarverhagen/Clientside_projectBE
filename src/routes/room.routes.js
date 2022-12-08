const express = require('express')
const router = express.Router()
//const Building = require('../models/building.model')() // note we need to call the model caching function
const  Room = require('../models/room.model')
const CrudController = require('../controllers/crud')
const RoomCrudController = new CrudController(Room)
// get all products
router.get('/', RoomCrudController.getAll)
// get a product
router.get('/:id', RoomCrudController.getById)
// create a product
router.post('/', RoomCrudController.create)
// update a product
router.put('/:id', RoomCrudController.update)
// remove a product
router.delete('/:id', RoomCrudController.delete)
module.exports = router