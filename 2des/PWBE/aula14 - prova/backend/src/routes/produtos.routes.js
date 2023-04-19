const express = require("express");
const router = express.Router();

const Produtos = require('../controllers/produtos');

router.get('/', Produtos.teste);
router.post('/produtos/criar', Produtos.criar);
router.get('/produtos/listar', Produtos.listar);
router.get('/produtos/listar/:id', Produtos.listar);
router.put('/produtos/alterar', Produtos.alterar);
router.delete('/produtos/excluir/:id', Produtos.excluir);

module.exports = router
