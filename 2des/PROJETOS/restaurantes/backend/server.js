const express = require('express')
const cors = require('cors')

const clienteRouter = require('./src/routes/cliente.routes')
const categoriaRouter = require('./src/routes/categoria.routes')
const restauranteRouter = require('./src/routes/restaurante.routes')
const cardapioRouter = require('./src/routes/cardapio.routes')
const avaliacaoRouter = require('./src/routes/avaliacao.routes')


const app = express()
app.use(express.json())
app.use(cors())
app.use('/', clienteRouter)
app.use('/', categoriaRouter)
app.use('/', restauranteRouter)
app.use('/', cardapioRouter)
app.use('/', avaliacaoRouter)

app.listen(3000, () => {
    console.log("Respondendo na porta 3000")
})