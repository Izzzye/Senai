var tbody = document.querySelector("tbody");
var form = document.querySelector("form");

var linha = [
    {
        "funcionario":"Vitoria da Cruz",
        "matricula":"010203",
        "setor":"Eletronico",
        "comissao":5,
        "vendas":[
            {
                "data":"03/02/2023",
                "valor":1250.00
            },
            {
                "data":"03/02/2023",
                "valor":899.00
            },
            {
                "data":"04/02/2023",
                "valor":5999.90
            }
        ]
    },
    {
        "funcionario":"Cecilia Martins",
        "matricula":"124578",
        "setor":"Eletronico",
        "comissao":5,
        "vendas":[
            {
                "data":"15/01/2023",
                "valor":3290.90
            },
            {
                "data":"16/01/2023",
                "valor":1320.99
            },
            {
                "data":"16/02/2023",
                "valor":990.90
            }
        ]
    },
    {
        "funcionario":"Joaquim Souza",
        "matricula":"124578",
        "setor":"Moveis",
        "comissao":12,
        "vendas":[
            {
                "data":"08/01/2023",
                "valor":4500.00
            },
            {
                "data":"08/01/2023",
                "valor":599.99
            },
            {
                "data":"09/01/2023",
                "valor":259.90
            }
        ]
    }
]

for (let i = 0; i < linha.length; i++){
    let linhas = linha[i];
    var total = 0;
    var ValorC = 0;

    for (let l = 0; l < linha[i].vendas.length; l++){
        total += linha[i].vendas[l].valor;
    }

    ValorC = total / 100 * linha[i].comissao;

    let line = document.createElement("tr");
    
    let func = document.createElement("td");
    func.innerHTML = linhas.funcionario;

    let mat = document.createElement("td");
    mat.innerHTML = linhas.matricula;

    let set = document.createElement("td");
    set.innerHTML = linhas.setor;

    let tot = document.createElement("td");
    tot.innerHTML = "R$ " + total.toFixed(2);

    let com = document.createElement("td");
    com.innerHTML = "R$ " + ValorC.toFixed(2);
    
    line.appendChild(mat);
    line.appendChild(func); 
    line.appendChild(set);
    line.appendChild(tot);
    line.appendChild(com);
    tbody.appendChild(line);
}


function click() {
    var matricula = document.querySelector("#matricula");
    var data = document.querySelector("#data");
    var valor = document.querySelector("#valor");

    let cois = {
        "data": data.value,
        "valor": Number(valor.value)
    }

    for(j = 0; j < linha.length; j++) {
        if(matricula === linha[j].matricula) {
            linha[j].vendas.push(cois)
        }
    }
}

console.log(click());