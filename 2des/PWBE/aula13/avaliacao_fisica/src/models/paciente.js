class Paciente {

    constructor(i){
        this.id = i.id
        this.nome_completo = i.nome_completo
        this.nascimento = i.nascimento
        this.peso = i.peso
        this.altura = i.altura
    }

    create() {
        return `INSERT INTO paciente VALUE(${this.id}, '${this.nome_completo}', '${this.nascimento}', ${this.peso}, ${this.altura})`
    }

    read() {
        if (this.id == undefined)
            return `SELECT * FROM paciente`
        else
            return `SELECT * FROM paciente WHERE id = ${this.id}`
    }

    update() {
        return `UPDATE paciente SET nome_completo = '${this.nome_completo}', nascimento = '${this.nascimento}', peso = ${this.peso}, altura = ${this.altura}  WHERE id = '${this.id}'`
    }

    delete() {
        return `DELETE FROM paciente WHERE id = '${this.id}'`
    }

    
}

module.exports = Paciente;