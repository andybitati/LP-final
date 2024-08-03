const express = require('express');
const router = express.Router();
const AuthModel = require('../Autentification/AutMoD');

router.post('/signup', AuthModel.SignUp);
router.post('/login', AuthModel.login);
router.post('/logout', AuthModel.logout);

module.exports = router;