const express = require('express');
const router = express.Router();

const { list, get, create, update, remove } = require('../controller/gadgetController');
const { auth } = require("../middleware/authMiddleware");

router.get('/list', list);
router.get('/:id', get);

router.post('/create', auth, create);
router.put('/update/:id', auth, update);
router.delete('/delete/:id', auth, remove);

module.exports = router;
