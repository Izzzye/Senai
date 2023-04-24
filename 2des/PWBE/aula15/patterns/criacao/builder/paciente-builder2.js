// Criar uma classe Paciente com um Método construtor
class Paciente{
    nome
    idade
    peso
    altura
    imc
    constructor(nome, peso, idade, altura){
        this.nome = nome // o Primeiro é parâmetro o segundo é atributo
        this.idade = idade
        this.peso = peso
        this.altura = altura
        this.imc = this.getImc()
    }
    getImc(){
        return Number((this.peso/this.altura ** 2).toFixed(2))
    }
}

// Construir o Objeto paciente1 utilizando a classe Paciente com o construtor
const paciente1 = new Paciente('Jorgina', 74, 50, 1.50)
// Mostrar o resultado
console.log(paciente1)

// Construir um objeto paciente2 sem todos os parâmetros
const paciente2 = new Paciente('karuna')
console.log(paciente2)
