var body = document.querySelector("body")

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

for (let i = 0; i < destinos.length; i++){
    let destino = destinos[i]

    let banner = document.createElement("div")
    banner.className = "banner"
    banner.style.backgroundImage = `url(${destino.imagem})`

    let dest = document.createElement("p")
    dest.innerHTML = destino.destino

    let desc = document.createElement("p")
    desc.innerHTML = destino.descricao

    banner.appendChild(dest)
    banner.appendChild(desc)

    body.appendChild(banner);

}