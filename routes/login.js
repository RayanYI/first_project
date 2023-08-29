const express = require('express');
const loginView = require('../controllers/loginController');
const router = express.Router();
router.get('/', loginView.loginView);
router.get('/test', loginView.test);
module.exports = router;