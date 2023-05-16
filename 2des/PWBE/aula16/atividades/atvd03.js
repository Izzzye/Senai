class Veiculo{
  
    constructor(placa, modelo, marca, ano, diaria){
        this.placa = placa
        this.modelo = modelo
        this.marca = marca
        this.ano = ano
        this.idade = this.getIdade()
        this.diaria = diaria
    }

    getIdade(){
        const date = new Date().getFullYear();
        return Number(date-this.ano)
    }
}

class Aluguel{
   
    constructor(id, veiculo, dataRetirada, dataDevolucao){
        this.id = id
        this.veiculo = veiculo
        this.dataRetirada = new Date(dataRetirada)
        this.dataDevolucao = new Date(dataDevolucao)
        this.valorAluguel = this.getValor()
    }

    getDias(){
       return (this.dataDevolucao - this.dataRetirada) / (1000 * 60 * 60 *24)
    }

    getValor(){
        return Number((this.getDias() * this.veiculo.diaria).toFixed(2))
    }

}

// define a interface para todos os componentees da árvore
class Componente {
    constructor(obj) {
        this.obj = obj;
    }
    add(componente) { }
    remove(componente) { }
    getfilho(index) { }
    getObj() { }
    print() { }
}

// representa os objetos folha na árvore
class Folha extends Componente {
    constructor(obj) {
        super(obj);
    }
    getObj() {
        return this.obj;
    }
    print() {
        console.log(this.obj);
    }
}

// representa os objetos compostos na árvore
class Composite extends Componente {
    constructor(obj) {
        super(obj);
        this.filhos = [];
    }
    add(componente) {
        this.filhos.push(componente);
    }
    remove(componente) {
        raiz
        const index = this.filhos.indexOf(componente);
        this.filhos.splice(index, 1);
    }
    getfilho(index) {
        return this.filhos[index];
    }
    getObj() {
        return this.obj;
    }
    print() {
        console.log(this.obj);
        this.filhos.forEach(filho => {
            filho.print();
        });
    }
}

const veiculo1 = new Composite(new Veiculo('JHK-2518', 'Uno', 'Fiat', 2015, 75.9))
veiculo1.add(new Folha(new Aluguel(1,veiculo1.obj.diaria, '2023-04-01', '2023-04-06')))
veiculo1.add(new Folha(new Aluguel(5,veiculo1.obj.diaria, '2023-04-08', '2023-04-16')))

const veiculo2 = new Composite(new Veiculo('PBC-5A58', 'Gol', 'VW', 2018, 99.9))
veiculo2.add(new Folha(new Aluguel(2, veiculo2.obj.diaria,'2023-04-01', '2023-04-08')))
veiculo2.add(new Folha(new Aluguel(3, veiculo2.obj.diaria,'2023-04-02', '2023-04-07')))

const veiculo3 = new Composite(new Veiculo('CCB-2F19', 'Celta', 'Chevrolet', 2007, 49.9))
veiculo3.add(new Folha(new Aluguel(4, veiculo3.obj.diaria,'2023-04-07', '2023-04-16')))


veiculo1.print()
// veiculo2.print()
// veiculo3.print()