const express = require('express')
const cors = require('cors')

const vendedoresRouter = require('./src/routes/vendedores.routes');
const produtosRouter = require('./src/routes/produtos.routes');
const vendasRouter = require('./src/routes/vendas.routes');

const app = express()
app.use(express.json())
app.use(cors())
app.use('/', vendedoresRouter)
app.use('/', produtosRouter)
app.use('/', vendasRouter)

app.listen(3000, () => {
    console.log("Funfando");
})