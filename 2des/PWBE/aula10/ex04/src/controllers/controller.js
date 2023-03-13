const teste = (req, res) => {
    res.json('Back Respondendo').end()
}

const nome = (req, res) =>{
    const nomes = [
        "karen Costa",
        "Jesus Cabelo",
        "Matheus Nóia",
        "Diggo Renascentista",
        "Jão tiktoker",
        "Jão Pata-mansa",
        "Marcelinho kid"
    ]

    random = Math.floor(Math.random() * nomes.length)

    res.json({ 
        "nome": nomes[random]
    }).end()
}

module.exports = {
    teste,
    nome
}