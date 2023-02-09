//busca todos os elementos pelo id - getElementById(id) 
//busca todos os elementos pela class - getElementClassName(class)
//busca todos os  elementos pela tag - getElementByTagName(tag)
//busca apenas o primeiro elemento por id, class ou tag - querySelector("")
//busca todos os elementos - querySelectorAll("")
//querySelector("#id")
//querySelector(".class")
//querySelector("tag")

//var titulo = document.getElementById("titulo")
//var titulos = document.getElementsByTagName("h1")
//var texto = document.getElementsByClassName("texto")
//var titulo = document.querySelector("#titulo")

// var paragrafo = document.querySelector("p")
// //serve para pegar o conteudo da tag
// console.log(paragrafo.innerHTML)
// paragrafo.innerHTML = "informação que eu quero"

// var body = document.querySelector("body")

// body.className = "dark jc df"

// body.classList.add("m1")
// body.classList.remove("jc")
// body.classList.toggle("m2")

// console.log(body.className)
// console.log(body.classList)

// var dados = document.querySelectorAll("p")

// for(let i = 0; i < dados.length; i++){
//     console.log(dados[i].innerHTML)
// }

var pNome = document.querySelector("#nome")
var pEndereco = document.querySelector("#endereco")
var pTelefone = document.querySelector("#telefone")
var pNascimento = document.querySelector("#nascimento")

let dados ={
    "nome": pNome.innerHTML,
    "endereco": pEndereco.innerHTML,
    "telefone": pTelefone.innerHTML,
    "nascimento": pNascimento.innerHTML
}

console.log(dados)

let info ={
    "nome": "Fulano Da Silva",
    "endereco": "Avenida das ruas",
    "telefone": "1441188795",
    "nascimento": "12/05/2005"
}

pNome.innerHTML = info.nome;
pEndereco.innerHTML = info.endereco;
pTelefone.innerHTML = info.telefone;
pNascimento.innerHTML = info.nascimento;

console.log(info)