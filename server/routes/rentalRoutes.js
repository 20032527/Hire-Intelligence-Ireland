const express = require('express');
const router = express.Router();

const { create, my, returnRental } = require('../controller/rentalController'); 
const { auth } = require("../middleware/authMiddleware");

/* Create a new rental (user must be logged in) */
router.post('/create',auth, create);  

/* Get logged-in user's rental history */
router.get('/my',auth, my);                

module.exports = router;
