const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produto');

router.get('/produtos', produtoController.findAll);

module.exports = router;
