const express = require("express");
const router = express.Router();

const Cardapio = require('../controller/cardapio');

router.post('/cardapio/criar', Cardapio.criar);
router.get('/cardapio/listar', Cardapio.listar);
router.get('/cardapio/listar/:id', Cardapio.listar);
router.put('/cardapio/alterar', Cardapio.alterar);
router.delete('/cardapio/excluir/:id', Cardapio.excluir);

module.exports = router