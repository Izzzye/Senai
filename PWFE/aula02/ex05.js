let date = Date.parse(prompt("Digite sua data de nascimento:"))
let hj = new Date()

hj.toLocaleDateString('pt-BR')

console.log(hj - date) 