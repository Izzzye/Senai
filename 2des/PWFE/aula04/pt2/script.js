var banner = document.querySelector(".banner")
var destino = document.querySelector("#destino")
var descricao = document.querySelector("#descricao")

var destinos = [
    {
        "imagem": "https://t3.ftcdn.net/jpg/03/26/22/48/360_F_326224870_vB8XRJbWr0qDG5bhAomLjVlKzcUXPdKA.jpg",
        "destino": "hogwarts",
        "descricao": "casao das bruxa"
    },
    {
        "imagem": "https://www.vounajanela.com/wp-content/uploads/2020/01/kyoto-japao-1-1.jpg",
        "destino": "kyoto",
        "descricao": "lugar bonito"
    },
    {
        "imagem": "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/02/passagens-aereas-paris-capa2019-01-820x430.jpg",
        "destino": "paris",
        "descricao": "outro lugar bonito porem fedido"
    }
]

let indice = gerarNumero(destinos.length)

destino.innerHTML = destinos[indice].destino
descricao.innerHTML = destinos[indice].descricao
banner.style.backgroundImage = `url(${destinos[indice].imagem})`

function gerarNumero(size){
    let num = Math.floor(Math.random() * size)
    return num
}