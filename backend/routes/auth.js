const express = require('express');
const router = express.Router();
const { register, login, getUser, forgotPassword, resetPassword } = require('../controllers/authControllers.js');
const authMiddleware = require('../middleware/auth');

router.post('/register', register);
router.post('/login', login);
router.get('/me', authMiddleware, getUser);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);

module.exports = router;