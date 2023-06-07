const express = require('express');
const router = express.Router();

const Usuarios = require('./controllers/usuarios')

router.get('/', (req, res)=> {res.json('Sistema Online').end()})
router.get('/usuarios', Usuarios.listar)
router.post('/usuarios', Usuarios.login)

module.exports = router