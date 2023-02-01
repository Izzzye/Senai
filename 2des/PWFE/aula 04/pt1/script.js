var paragrafo = document.querySelector("p")
var inpNome = document.querySelector("#nome")

var foto = document.querySelector("#foto")
var descricao = document.querySelector("#descricao")

function mostrarNome(){
    let valor = inpNome.value

    let data = {
        "nome" : valor
    }

    paragrafo.innerHTML = JSON.stringify(data)
    paragrafo.innerHTML = data.nome
}

function atualizarDados(){
    let info = {
        "descricao": "luffy",
        "imagem": [
            "https://www.petz.com.br/blog/wp-content/uploads/2022/02/gato-e-carnivoro2.jpg",
            "https://www.rbsdirect.com.br/imagesrc/25516126.jpg?w=700",
            "https://s2.glbimg.com/wZXoWeocGbZHgZHgETZQ7wtmJro=/0x0:960x640/600x0/smart/filters:gifv():strip_icc()/i.s3.glbimg.com/v1/AUTH_fb623579cd474803aedbbbbae014af68/internal_photos/bs/2022/c/W/RB0QfURSeCvJP48mA90g/2022-01-26-vidadebicho-gato-bengal-pixabay-6003100-960-720.jpeg"

        ]
    }

    descricao.innerHTML = info.descricao
    foto.src = info.imagem[gerarNumero()]
}

function gerarNumero(){
    let num = Math.floor(Math.random()*3)
    return num
}