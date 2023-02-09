var pNome = document.querySelector("#nome")
var pDescricao = document.querySelector("#descricao")
var pValor = document.querySelector("#valor")

let prod = {
    "nome": "NOTEBOOK",
    "descricao": "lenovo 500ssd e os carai",
    "valor": 3000.00
}

pNome.innerHTML = prod.nome 
pDescricao.innerHTML = prod.descricao 
pValor.innerHTML =prod.valor 
