// //alert("olá, mundo")
// console.log("teste")
// parseInt("oi")

// let a = "10" // um = atribuição
// console.log(a == 10) // dois = compara apenas o conteúdo 
// console.log(a === 10) // tês = compara conteúdo e tipo

//------------------------------------------------

// let opcao = prompt("1 a 4")

// switch (opcao) {
//     case "1":
//         console.log("Escolheu a opção 1")
//         break
//     case "2":
//         console.log("Escolheu a opção 2")
//         break
//     case "3":
//         console.log("Escolheu a opção 3")
//         break
//     case "4":
//         console.log("Escolheu a opção 4")
//     default:
//         console.log("opção inválida")
//         break
// }

//-----------------------------------------------

// for(let i = 1; i <= 10; i++) {
//     console.log(i)
// }

//----------------------------------------------

// let i = 1
// while(i <= 10) {
//     console.log(i)
//     i++
// }

//-----------------------------------------------

// let num = 0
// do{
//     num = prompt("Diferente 10")
//     console.log(num)
// }while(num != 10)

//------------------------------------------------

// let nome = (prompt("Digite um nome"))
// let nomes = ["fulano", "beltrano", "ciclano"]

// let loc = false

// for (let i = 0; i < nomes.length; i++) {
//     if(nomes[i] == nome){
//         alert("Nome localizado")
//         console.log(nomes[i])
//         loc = true
//     }
// }

// if(loc == false){
//     console.log("invalid")
// }

// ---------------------------------------------------

// function somar  (a, b){
//     let rest = a + b
//     return rest
// }
// console.log(somar(5, "2"))

// -----------------------------------------------------

function somar(a,b){
    if( typeof (a) != "number" || typeof (b) != "number") return false
    return a + b
}