const express = require("express");
const router = express.Router();

const Item = require ('../controllers/controller')

router.get('/', Item.teste)
router.post('/concatenar', Item.concatenar)

module.exports = router