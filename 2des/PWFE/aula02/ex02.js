let nomes = ["jul", "hanna", "pedro", "petter", "ed", "marian", "jao", "cleber", "rodrigo", "eduardo"]
let qtd = 3

function funcao (nomes){
    for(i = 1; i <= qtd; i++){
        let sort = Math.floor(Math.random()*10)
        console.log(nomes[sort])
    }
}

funcao(nomes);