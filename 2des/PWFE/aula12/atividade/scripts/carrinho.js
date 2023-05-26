const tcorpo = document.querySelector("#tcorpo");
const totalCarrinho = document.querySelector("#valorTotal")

const produtos = JSON.parse(window.localStorage.getItem("produtos")) || []

var total = 0;

function preecherTabela() {
   
    produtos.forEach((e, i) => {
        const linha = document.createElement("tr");
        const nome = document.createElement("td");
        const preco = document.createElement("td");
        const excluir = document.createElement("td");
        valor = Number(e.preco);
        total += valor;
        nome.innerHTML = e.nome;
        preco.innerHTML = valor;
        excluir.innerHTML = `<button  id="excluir" onclick="excluirItem('${i}')">X</button>`;
        linha.appendChild(nome);
        linha.appendChild(preco);
        linha.appendChild(excluir);
        tcorpo.appendChild(linha);
        totalCarrinho.innerHTML = 'Total: R$'+ total.toFixed(2)
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

function finalizarCompra(){
    const item = {
        data: new Date(),
        pizzas: produtos,
        total: total.toFixed(2)

    }

    const pedidos = JSON.parse(window.localStorage.getItem("pedidos")) || []
  
    pedidos.push(item)

    window.localStorage.setItem("pedidos",JSON.stringify(pedidos))
    
    window.location.reload()

    window.location.href = "./pedido.html"

    window.localStorage.removeItem("produtos");
}
