const express = require('express');
const Imoveis = require("../controllers/imovel.controller")
const router = express.Router();

router.get("/imoveis", Imoveis.listar);
router.get("/imoveis/:info", Imoveis.buscar);

module.exports = router;