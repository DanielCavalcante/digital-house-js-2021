const { Router } = require('express')
const produtosController = require('../controllers/produtos.controller')

const router = Router()

router.get('/produtos', produtosController.getProdutos);
router.get('/produtos/:nome', produtosController.getProduto);

module.exports = router;

