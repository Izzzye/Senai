const teste = (req, res) => {
    res.json('Back Respondendo').end()
}

const concatenar = (req, res) =>{
    const { nome, sobrenome} = req.body

    resultado = nome + " " + sobrenome

    res.json({ 
        "nome_completo": resultado
    }).end()
}

module.exports = {
    teste,
    concatenar
}