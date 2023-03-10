const express = require('express')
const cors = require('cors')

const router = require('./src/routes/livro')

const app = express()
app.use(express.json())
app.use(cors())
app.use('/', router)

app.listen(3001, () => {
    console.log("Proj funcionando na 3001")
})