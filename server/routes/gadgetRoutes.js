const express = require('express');
const router = express.Router();

const { list, get, create, update, remove } = require('../controller/gadgetController');
const { auth } = require("../middleware/authMiddleware");

/* Public routes – anyone can view gadgets */
/* Ref: https://expressjs.com/en/5x/api.html#router.get */
router.get('/list', list);
router.get('/:id', get);

/* Protected routes – login required */
/* Ref: https://expressjs.com/en/5x/api.html#router.post */

router.post('/create', auth, create);
router.put('/update/:id', auth, update);
router.delete('/delete/:id', auth, remove);

module.exports = router;
