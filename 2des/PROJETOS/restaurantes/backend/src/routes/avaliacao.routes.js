const express = require("express");
const router = express.Router();

const Avaliacao = require('../controller/avaliacao');

router.post('/avaliacao/criar', Avaliacao.criar);
router.get('/avaliacao/listar', Avaliacao.listar);
router.get('/avaliacao/listar/:id', Avaliacao.listar);
router.put('/avaliacao/alterar', Avaliacao.alterar);
router.delete('/avaliacao/excluir/:id', Avaliacao.excluir);

module.exports = router