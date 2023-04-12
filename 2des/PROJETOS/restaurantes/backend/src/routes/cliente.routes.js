const express = require("express");
const router = express.Router();

const Cliente = require('../controller/cliente');

router.get('/', Cliente.teste);
router.post('/cliente/criar', Cliente.criar);
router.get('/cliente/listar', Cliente.listar);
router.get('/cliente/listar/:id', Cliente.listar);
router.put('/cliente/alterar', Cliente.alterar);
router.delete('/cliente/excluir/:id', Cliente.excluir);

module.exports = router