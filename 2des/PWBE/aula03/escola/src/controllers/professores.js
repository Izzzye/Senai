var professores = []

const criar = (req, res) => {
    let {nome, especialidade} = req.body

    let id = 1

    if(professores.length > 0){
        id = professores[professores.length-1].id +1
    }

    const professor = {id, nome, especialidade}

    professores.push(professor)

    res.status(201).end()
}

const listar = (req, res) => {
    res.status(200).json(professores).end()
}

const buscar = (req, res) => {
    let {id} = req.params

    professores.forEach((professor, index) =>{
        if(professor.id == id){
            res.status(200).json(professor).end()
        }
    })

    res.status(404).end()
}

const atualizar = (req,res) => {
    let {nome, especialidade} = req.body
    let {id} = req.params

    professores.forEach((professor, index) =>{
        if(professor.id == id){
            professores[index] = {id, nome, especialidade}
            res.status(200).json(professores[index]).end()
        }
    })

    res.status(404).end()
}

const deletar = (req,res) =>{
    let {id} = req.params

    professores.forEach((professor, index) =>{
        if(professor.id == id){
            professores.splice(index, 1)
        }
    })

    res.status(200).json(professores).end()
}

module.exports={
    criar,
    listar,
    buscar,
    atualizar,
    deletar
}