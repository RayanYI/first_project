const express = require('express');
const profilView = require('../controllers/profilController');
const router = express.Router();
router.get('/', profilView);
module.exports = router;