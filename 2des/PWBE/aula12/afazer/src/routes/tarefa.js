const express = require('express');
const router = express.Router();

const Tarefa = require('../controllers/tarefa');

router.post('/create', Tarefa.cadastrar)
router.get('/', Tarefa.app);
router.put('/update', Tarefa.alterar)
router.delete('/del/:id', Tarefa.excluir);

module.exports = router;