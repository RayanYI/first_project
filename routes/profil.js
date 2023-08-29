const express = require('express');
const profilView = require('../controllers/profilController');
const router = express.Router();
router.get('/', (req, res)=>{ profilView(req,res,req.session.user.email,req.session.user.password)});
module.exports = router;