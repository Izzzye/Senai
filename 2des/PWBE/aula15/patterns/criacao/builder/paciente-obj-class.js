// POO Criar um Objeto JavaScript
const objeto = {}
// Atributo
objeto.nome = "Márcia"
objeto.idade = 19
objeto.peso = 66.5
objeto.altura = 1.65
// Mostrar Objeto
console.log(objeto)

// Método
objeto.getImc = () => {
    return Number((objeto.peso / (objeto.altura ** 2)).toFixed(2))
}
//Mostrar Método
console.log(objeto.getImc())
// Incorporar o resultado do Método a um atributo
objeto.imc = objeto.getImc()
// Mostrar o Objeto com o Método incorporado
console.log(objeto)
// RESULTADO
// {
//     nome: 'Márcia',
//     idade: 19,
//     peso: 66.5,
//     altura: 1.65,
//     getImc: [Function (anonymous)],
//     imc: 24.43
//   }


//Criar um Objeto a partir de uma Classe
class Paciente{
    // Atributos
    nome
    idade
    peso
    altura
    imc = this.getImc()

    // Método
    getImc(){
        return Number((this.peso / this.altura ** 2).toFixed(2))
    }
}
// Mostrar somente a Classe
console.log(Paciente)
// Instânciar a classe Paciente em um objeto
const paciente1 = new Paciente()
// Mostrar o objeto instanciado  na classe Paciente
console.log(paciente1)
// O objeto paciente1 está com todos os atributos e métodos indefinidos
paciente1.nome = 'Alfredo'
paciente1.idade = 25
paciente1.peso = 88
paciente1.altura = 1.92
// Mostrar paciente1
console.log(paciente1)
