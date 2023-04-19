const express = require("express");
const router = express.Router();

const Vendas = require('../controllers/vendas');

router.get('/', Vendas.teste);
router.post('/vendas/criar', Vendas.criar);
router.get('/vendas/listar', Vendas.listar);
router.get('/vendas/listar/:id', Vendas.listar);
router.put('/vendas/alterar', Vendas.alterar);
router.delete('/vendas/excluir/:id', Vendas.excluir);
router.get('/vendas', Vendas.vendas);
router.get('/vendas/total', Vendas.totalVendas);

module.exports = router