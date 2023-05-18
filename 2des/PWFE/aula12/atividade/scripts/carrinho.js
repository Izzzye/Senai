const tcorpo = document.querySelector("#tcorpo");

const produtos = JSON.parse(window.localStorage.getItem("produtos")) || []


function preecherTabela() {
    produtos.forEach((e, i) => {
        const linha = document.createElement("tr");
        const nome = document.createElement("td");
        const preco = document.createElement("td");
        const excluir = document.createElement("td");
        nome.innerHTML = e.nome;
        preco.innerHTML = e.preco;
        excluir.innerHTML = `<button onclick="excluirItem('${i}')">X</button>`;
        linha.appendChild(nome);
        linha.appendChild(preco);
        linha.appendChild(excluir);
        tcorpo.appendChild(linha)
    })
}

function excluirItem(i){
 produtos.splice(i,1);
 window.localStorage.setItem('produtos', JSON.stringify(produtos));
 window.location.reload();
}

function limparDados(){
    window.localStorage.removeItem("produtos");
    window.location.reload();
}