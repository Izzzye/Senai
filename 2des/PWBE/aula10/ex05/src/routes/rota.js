const express = require("express");
const router = express.Router();

const Item = require ('../controllers/controller')

router.get('/', Item.teste)
router.get('/tarefas', Item.listar)
router.post('/nova', Item.criar)

module.exports = router