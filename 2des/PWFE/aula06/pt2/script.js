const tarefa = document.querySelector("#tarefa")//input
const listaPendentes = document.querySelector("#pendentes")
const listaFinalizadas = document.querySelector("#finalizadas")
const card = document.querySelector(".card")

function cadastrar(){
    var clone = card.cloneNode(true)

    clone.classList.remove("model")

    clone.querySelector("#item").innerHTML = tarefa.value  // pega o valor do input


    let formatada = new Intl.DateTimeFormat('pt-BR', {
        dateStyle: "short",
        timeStyle: "medium"
    }).format(new Date())

    clone.querySelector("#data").innerHTML = formatada

    clone.querySelector("button").addEventListener("click",(e) =>{
        let elemento = e.target.parentNode

        listaFinalizadas.appendChild(elemento)

        e.target.remove()

        formatada = new Intl.DateTimeFormat('pt-BR', {
            dateStyle: "short",
            timeStyle: "medium"
        }).format(new Date())

        elemento.querySelector("#data").innerHTML = formatada
    })

    listaPendentes.appendChild(clone)
}
