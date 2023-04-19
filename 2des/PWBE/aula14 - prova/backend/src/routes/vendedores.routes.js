const express = require("express");
const router = express.Router();

const Vendedores = require('../controllers/vendedores');

router.get('/', Vendedores.teste);
router.post('/vendedores/criar', Vendedores.criar);
router.get('/vendedores/listar', Vendedores.listar);
router.get('/vendedores/listar/:id', Vendedores.listar);
router.put('/vendedores/alterar', Vendedores.alterar);
router.delete('/vendedores/excluir/:id', Vendedores.excluir);
router.get('/vendedores/comissao', Vendedores.comissao);

module.exports = router