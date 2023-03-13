const express = require("express");
const router = express.Router();

const Item = require ('../controllers/controller')

router.get('/', Item.teste)
router.get('/random', Item.random)

module.exports = router