const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');

// POST /auth/login - Authenticates a CSA and returns an API key
router.post('/login', authController.login);

module.exports = router;
