const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuario');

router.get('/usuarios', usuarioController.findAll);
router.get('/usuarios/:id', usuarioController.findOne);
router.post('/usuarios', usuarioController.create);
router.put('/usuarios/:id', usuarioController.update);
router.delete('/usuarios/:id', usuarioController.remove);

module.exports = router;
