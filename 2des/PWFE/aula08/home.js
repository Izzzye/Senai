const {id, nome} = JSON.parse(localStorage.getItem("user"))

const body = document.querySelector("body")
const saudacao = document.querySelector("#saudacao")

saudacao.innerHTML += nome

const base = [
    {
        "id": 1,
        "tarefas": [
            {
                "data": "16/01/2023",
                "description": "Ir na igreja",
                "status": 1
            },
            {
                "data": "17/01/2023",
                "description": "Ir na paradia",
                "status": 0
            },
            {
                "data": "18/01/2023",
                "description": "Ir ao dentista",
                "status": 0
            }
        ]
    },
    {
        "id": 2,
        "tarefas": [
            {
                "data": "18/01/2023",
                "description": "Comprar pao",
                "status": 1
            },
            {
                "data": "19/01/2023",
                "description": "Ir ao mercado",
                "status": 0
            },
            {
                "data": "20/01/2023",
                "description": "Ir ao culto",
                "status": 1
            }
        ]
    },
    {
        "id": 3,
        "tarefas": [
            {
                "data": "16/01/2023",
                "description": "comprar ervas",
                "status": 1
            },
            {
                "data": "17/01/2023",
                "description": "comprar cristais",
                "status": 1
            },
            {
                "data": "18/01/2023",
                "description": "ritual ",
                "status": 0
            }
        ]
    }
]

const data = base.find(item => {
    return item.id == id
})

if(data != undefined){
    data.tarefas.forEach((tarefa) => {
        criarTarefa(tarefa.data, tarefa.description, tarefa.status)
    })
}

function criarTarefa(data, description, status){
    let card = document.createElement("div")
    let pdata = document.createElement("p")
    let pdescription = document.createElement("p")

    pdata.innerHTML = data
    pdescription.innerHTML = description

    if(status == 1){
        card.style.backgroundColor = "green"
    }

    card.appendChild(pdata)
    card.appendChild(pdescription)

    body.appendChild(card)
}