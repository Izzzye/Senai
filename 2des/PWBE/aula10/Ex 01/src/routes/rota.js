const express = require("express");
const router = express.Router();

const Item = require ('../controllers/controller')

router.get('/', Item.teste)
router.get('/calcular/:operacao', Item.operacao)

module.exports = router