const express = require('express');
const helloView = require('../controllers/helloController');
const router = express.Router();
router.get('/', helloView);
module.exports = router;