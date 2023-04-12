const express = require("express");
const router = express.Router();

const Restaurante = require('../controller/restaurante');

router.post('/restaurante/criar', Restaurante.criar);
router.get('/restaurante/listar', Restaurante.listar);
router.get('/restaurante/listar/:id', Restaurante.listar);
router.put('/restaurante/alterar', Restaurante.alterar);
router.delete('/restaurante/excluir/:id', Restaurante.excluir);

module.exports = router