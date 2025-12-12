const express = require('express');
const router = express.Router();

const { create, my, returnRental } = require('../controller/rentalController'); 
const { auth } = require("../middleware/authMiddleware");




router.post('/create',auth, create);             
router.get('/my',auth, my);                

module.exports = router;
