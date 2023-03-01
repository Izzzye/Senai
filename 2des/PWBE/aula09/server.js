const express = require("express")
const cors = require("cors")

const corretorRoutes = require("./src/routes/corretor.route");

const app = express()

app.use(cors())
app.use(express.json())
app.use(corretorRoutes)

app.listen(3000, () =>{
    console.log("Rodando")
})