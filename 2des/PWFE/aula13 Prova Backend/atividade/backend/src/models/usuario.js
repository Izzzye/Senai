class Usuario{
    endereco = {}
    constructor(obj){
        this.id = obj.id
        this.nome = obj.nome
        this.cpf = obj.cpf
        this.email = obj.email
        this.senha = obj.senha
        this.nascto = obj.nascto
        this.endereco.cep = obj.cep
        this.endereco.numero = obj.numero
        this.endereco.complemento = obj.complemento
        this.telefones = obj.telefones == undefined ? [] : obj.telefones.split(',')
    }

    read(){
        return "SELECT * FROM user";
    }

    login(){
        return `SELECT * FROM user WHERE email = '${this.email}' AND senha = password('${this.senha}')`;
    }

    update(){
        return `UPDATE usuarios SET nome = '${this.nome}', cpf = '${this.cpf}',email = '${this.email}',senha = '${this.senha}',
        nascto = '${this.nascto}',cep = '${this.endereco.cep}', numero = '${this.endereco.numero}',complemento = '${this.endereco.complemento}' WHERE id = ${this.id}`;
    }

    
}

module.exports = Usuario;