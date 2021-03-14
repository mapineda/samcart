const express = require('express')

const CarCtrl = require('../controllers/car-controller')

const router = express.Router()

// post
router.post('/car', CarCtrl.createCar);

// put
router.put('/car/:id', CarCtrl.updateCar);

// delete
router.delete('/car/:id', CarCtrl.deleteCar);

// get by id
router.get('/car/:id', CarCtrl.getCarById);

// get all cars
router.get('/cars', CarCtrl.getCars);

module.exports = router
