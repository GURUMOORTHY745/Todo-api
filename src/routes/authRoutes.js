const express = require('express');
const { register, login } = require('../controllers/authController');
const router = express.Router();

router.post('/register', register); // to register as authenticator
router.post('/login', login);   //// to login as authenticator

module.exports = router;