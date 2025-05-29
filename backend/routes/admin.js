const express = require('express');
const router = express.Router();
const { getAllUsers } = require('../controllers/adminController.js');
const authMiddleware = require('../middleware/auth.js');
const roleMiddleware = require('../middleware/role.js');

router.get('/users', authMiddleware, roleMiddleware(['admin']), getAllUsers);

module.exports = router;