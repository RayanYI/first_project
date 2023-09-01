const express = require('express');
const registerView = require('../controllers/registerController');
const router = express.Router();
router.get('/', registerView.registerView);
module.exports = router;