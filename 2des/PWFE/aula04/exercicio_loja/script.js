var main = document.querySelector("main")

var lojinha = [
    {
        "imagem": "",
        "nome": "",
        "valor": "",
        "button" : "COMPRAR"
    },
    {
        "imagem": "",
        "nome": "",
        "valor": "",
        "button" : "COMPRAR"
    },
    {
        "imagem": "",
        "nome": "",
        "valor": "",
        "button" : "COMPRAR"
    },
    {
        "imagem": "",
        "nome": "",
        "valor": "",
        "button" : "COMPRAR"
    },
    {
        "imagem": "",
        "nome": "",
        "valor": "",
        "button" : "COMPRAR"
    },
    {
        "imagem": "",
        "nome": "",
        "valor": "",
        "button" : "COMPRAR"
    },
    {
        "imagem": "",
        "nome": "",
        "valor": "",
        "button" : "COMPRAR"
    }
]

for(let i = 0; i < produtos.length; i++){
    let lojinha = lojinha[i]

    let produto = document.createElement("div")
    produto.className = "produto"
    
    let nome = document.createElement("p")
    nome.id = "nome"
    nome.innerHTML = lojinha.nome

    let valor = document.createElement("p")
    valor.id = "valor"
    valor.innerHTML = lojinha.valor

    let button = document.createElement("button")
    button.innerHTML = lojinha.button

    main.appendChild(produto)

    produto.appendChild(nome)
    produto.appendChild(valor)
    produto.appendChild(button)
}