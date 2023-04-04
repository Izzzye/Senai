const express = require('express');
const router = express.Router();

const Tarefa = require('../controllers/tarefa');

router.get('/', Tarefa.app);
router.delete('/del/:id', Tarefa.excluir);

module.exports = router;