const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuario')

router.get('/usuarios', usuarioController.index);

module.exports = router;
