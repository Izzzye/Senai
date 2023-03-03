const express = require('express');
const router = express.Router();

const Livro = require('../controllers/livro');

router.get('/', Livro.teste);
router.post('/livro/criar', Livro.criar);
router.get('/livro/listar', Livro.listar);
router.get('/livro/listar/:id', Livro.listar);
router.put('/livro/alterar', Livro.alterar);
router.delete('/livro/excluir/:id', Livro.excluir);

module.exports = router;