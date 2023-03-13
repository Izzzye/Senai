const teste = (req, res) => {
    res.json('Back Respondendo').end()
}

const random = (req, res) =>{
    let {limite} = req.query

    resultado = Math.floor(Math.random() * limite)

    res.json({ 
        "random": resultado
    }).end()
}

module.exports = {
    teste,
    random
}