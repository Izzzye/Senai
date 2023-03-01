const {matricula, nome, imoveis} = JSON.parse(localStorage.getItem("user"))

const body = document.querySelector("body")
const ola = document.querySelector("#ola")
const comissao = document.querySelector("#comissao")
var lucro = 0

ola.innerHTML += nome

if (imoveis != undefined){
    imoveis.forEach((imovel) =>{
        criarImovel(imovel.cod, imovel.endereco, imovel.valor )
    })
}

function criarImovel(cod, endereco, valor) {
    let card = document.createElement("div")
    let pCod = document.createElement("p")
    let pEndereco = document.createElement("p")
    let pValor = document.createElement("p")
    let vendido = document.createElement("button")

    vendido.addEventListener("click",() => {
        lucro += Number(valor)*0.10

        comissao.innerHTML = `Comissão: R$ ${lucro}`

        vendido.disabled = true
    })

    pCod.innerHTML = cod
    pEndereco.innerHTML = endereco
    pValor.innerHTML = valor
    vendido.innerHTML = "vendido"


    card.appendChild(pCod)
    card.appendChild(pEndereco)
    card.appendChild(pValor)
    card.appendChild(vendido)

    body.appendChild(card)
}