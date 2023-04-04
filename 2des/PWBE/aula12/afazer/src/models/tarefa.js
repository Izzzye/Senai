class Tarefa {
    constructor(i){
        this.id = i.id
        this.descricao = i.descricao
        this.quando = i.quando
    }

    read(){
        return `SELECT * FROM tarefas ORDER BY quando`
    }

    del(){
        return `DELETE FROM tarefas WHERE id = ${this.id}`
    }
}

module.exports = Tarefa;