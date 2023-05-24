const tcorpo = document.querySelector("#tcorpo");

const pedidos = JSON.parse(window.localStorage.getItem("pedidos")) || []
// window.localStorage.removeItem("pedidos")
function preencherTabela() {
    tcorpo.innerHTML = "";

    pedidos.forEach((e, i) => {
        const linha = document.createElement("tr");
        const data = document.createElement("td");
        const total = document.createElement("td");
        data.innerHTML = e.data.split("T")[0];
        linha.appendChild(data);
        e.pizzas.forEach((p)  => {
            const nome = document.createElement("p");
            const preco = document.createElement("p");
            const l = document.createElement("hr");

            nome.innerHTML = p.nome;
            preco.innerHTML = p.preco;

            linha.appendChild(nome);
            linha.appendChild(preco);
            linha.appendChild(l);

        }) 
        total.innerHTML = e.total;
        linha.appendChild(total)
        tcorpo.appendChild(linha);
    })
}