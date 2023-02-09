const nome = document.querySelector("#nome")
const endereco = document.querySelector("#endereco")
const comidas = document.querySelector("#comidas")
const qtd = document.querySelector("#qtd")
const pedidoCozinha = document.querySelector(".cozinha")
const pedidoEntrega = document.querySelector(".entrega")
const card = document.querySelector(".card")

function enviar(){
    var clone = card.cloneNode(true)
    clone.classList.remove("model")

    clone.querySelector("#cliente").innerHTML = nome.value
    clone.querySelector("#local").innerHTML = endereco.value
    clone.querySelector("#pedido").innerHTML = comidas.value
    clone.querySelector("#quantidade").innerHTML = qtd.value

    clone.querySelector("button").addEventListener("click",(e) =>{
        let elemento = e.target.parentNode
    
        pedidoEntrega.appendChild(elemento)
        e.target.innerHTML = ("Entregue")

        clone.querySelector("button").addEventListener("click",(f) =>{
             f.target.parentNode.remove()
        })

    })
    
    pedidoCozinha.appendChild(clone)
}