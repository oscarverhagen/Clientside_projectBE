const express = require('express')
const router = express.Router()
//const Building = require('../models/building.model')() // note we need to call the model caching function
const  User = require('../models/user.model')
const CrudController = require('../controllers/crud')
const userCrudController = new CrudController(User)
// get all products
router.get('/', userCrudController.getAll)
// get a product
router.get('/:id', userCrudController.getById)
// create a product
router.post('/', userCrudController.create)
// update a product
router.put('/:id', userCrudController.update)
// remove a product
router.delete('/:id', userCrudController.delete)
module.exports = router