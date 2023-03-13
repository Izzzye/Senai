const teste = (req, res) => {
    res.json('Back Respondendo').end()
}

const operacao = (req, res) => {
    let { vali, valii} = req.query
    const {operacao} = req.params
    let resultado = 0

    vali = Number(vali)
    valii = Number(valii)

    if (operacao == "somar"){
        resultado = vali + valii;
    }else if(operacao == "subtrair"){
        resultado = vali - valii;
    }else if(operacao == "multiplicar"){
        resultado = vali * valii;
    }else if(operacao == "dividir"){
        resultado = vali / valii;
    }

    res.json({ 
        "resultado": resultado
    }).end()
}

module.exports = {
    teste,
    operacao
}