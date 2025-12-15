const express = require("express");
const { register, login } = require("../controller/authController");

/* Create router instance */
/* Ref: https://expressjs.com/en/5x/api.html#router */

const router = express.Router();

/* Register new user */
/* Ref: https://expressjs.com/en/5x/api.html#router.post */
router.post("/register", register);
router.post("/login", login);

module.exports = router;
