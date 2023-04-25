class Compra{
    id
    data
    produto
    cliente
    totalParcelas
    preco
    quantidade
    total

    constructor(id, data, produto, cliente, totalParcelas, preco, quantidade){
        this.id = id
        this.data = data
        this.produto = produto
        this.cliente = cliente
        this. totalParcelas = totalParcelas
        this.preco = preco
        this.quantidade = quantidade
        this.total = this.getTotal()
    }

    getTotal(){
        return Number((this.preco * this.quantidade).toFixed(2))
    }
}

class Parcela{
    id
    compra
    dataVencimento
    dataPagamento
    valorParcela
    juros

    constructor(id, compra, dataVencimento, dataPagamento){
        this.id = id
        this.compra = compra
        this.dataVencimento = dataVencimento
        this.dataPagamento = dataPagamento
        this.valorParcela = this.getValorParcela()
        this.juros = this.getJuros()
    }

    getValorParcela(){

    }

    getDiasAtraso(){

    }

    getJuros(){

    }
}


const compras = [
    new Compra(1, '2022-03-25', 'TV LCD 4K 50" LG', 'Jair Santana', 4, 2800.00, 2),
    new Compra(2, '2022-05-12', 'TV LCD 4K 50" Samsung', 'Jurema Santana', 2, 3100.00, 1),
    new Compra(3, '2022-06-08', 'TV LCD 4K 50" LG', 'Mariana Silva', 3, 2850.00, 2),
    new Compra(4, '2022-02-17', 'TV LCD 4K 50" Samsung', 'Marta Oliveira', 5, 2899.90, 1),
]

const parcelas = [
    new Parcela(1, 1, '2022-04-25', '2022-04-23'),
    new Parcela(2, 1, '2022-05-25', '2022-05-24'),
    new Parcela(3, 1, '2022-06-25', '2022-06-27'),
    new Parcela(4, 1, '2022-07-25', '2022-07-30'),

    new Parcela(5, 2, '2022-06-12', '2022-06-12'),
    new Parcela(6, 2, '2022-07-12', '2022-07-15'),

    new Parcela(7, 3, '2022-07-08', '2022-07-18'),
    new Parcela(8, 3, '2022-08-08', '2022-08-08'),
    new Parcela(9, 3, '2022-09-08', '2022-09-06'),

    new Parcela(10, 4, '2023-03-17', '2023-03-20'),
    new Parcela(11, 4, '2023-04-17', '2023-04-22'),
    new Parcela(12, 4, '2023-05-17', null),
    new Parcela(13, 4, '2023-06-17', null),
    new Parcela(14, 4, '2023-07-17', null),
]

console.log(compras)