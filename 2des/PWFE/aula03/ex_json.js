// estrutura simples json

var usuario1 ={
    "nome": "fulano",
    "idade": 20,
    "cadastrado": true,
    "notas": [8,5,6]
}

var usuario2 ={
    "nome": "ciclano",
    "idade": 25,
    "cadastrado": false,
    "notas": [7,9,8]
}
console.log(usuario1. notas)

var usuarios =[]

usuarios.push(usuario1)
usuarios.push(usuario2)

for(let i = 0; i < usuarios.length; i++){
    console.log(usuarios[i].nome)
}
