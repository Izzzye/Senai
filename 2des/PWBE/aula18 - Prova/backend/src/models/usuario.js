class Usuario {
    endereco = {}
    constructor(obj) {
        this.id = obj.id
        this.nome = obj.nome
        this.cpf = obj.cpf
        this.email = obj.email
        this.senha = obj.senha
        this.nascto = obj.nascto
        this.endereco.cep = obj.endereco == undefined? obj.cep: obj.endereco.cep
        this.endereco.numero = obj.endereco == undefined? obj.numero: obj.endereco.numero
        this.endereco.complemento = obj.endereco == undefined? obj.complemento: obj.endereco.complemento
        this.telefones = obj.telefones
    }

    read() {
        return "SELECT * FROM user";
    }

    login() {
        return `SELECT * FROM user WHERE email = '${this.email}' AND senha = password('${this.senha}')`;
    }

    update() {
        if (this.senha == undefined)
            return `UPDATE user SET nome = '${this.nome}', cpf = '${this.cpf}', email = '${this.email}', nascto = '${this.nascto}', cep = '${this.endereco.cep}', numero = '${this.endereco.numero}', complemento = '${this.endereco.complemento}' WHERE id = ${this.id}`;
        else if(this.nascto == undefined)
            return `UPDATE user SET nome = '${this.nome}', cpf = '${this.cpf}', email = '${this.email}', senha = password('${this.senha}'), cep = '${this.endereco.cep}', numero = '${this.endereco.numero}', complemento = '${this.endereco.complemento}' WHERE id = ${this.id}`;
        else if(this.senha == undefined && this.nascto == undefined)
            return `UPDATE user SET nome = '${this.nome}', cpf = '${this.cpf}', email = '${this.email}', cep = '${this.endereco.cep}', numero = '${this.endereco.numero}', complemento = '${this.endereco.complemento}' WHERE id = ${this.id}`;
        else
            return `UPDATE user SET nome = '${this.nome}', cpf = '${this.cpf}', email = '${this.email}', senha = password('${this.senha}'), nascto = '${this.nascto}', cep = '${this.endereco.cep}', numero = '${this.endereco.numero}', complemento = '${this.endereco.complemento}' WHERE id = ${this.id}`;
    }   


}

module.exports = Usuario;