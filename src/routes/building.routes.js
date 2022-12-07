const express = require('express')
const router = express.Router()
//const Building = require('../models/building.model')() // note we need to call the model caching function
const  Building = require('../models/building.model')
const CrudController = require('../controllers/crud')
const buildingCrudController = new CrudController(Building)
// get all products
router.get('/', buildingCrudController.getAll)
// get a product
router.get('/:id', buildingCrudController.getById)
// create a product
router.post('/', buildingCrudController.create)
// update a product
router.put('/:id', buildingCrudController.update)
// remove a product
router.delete('/:id', buildingCrudController.delete)
module.exports = router