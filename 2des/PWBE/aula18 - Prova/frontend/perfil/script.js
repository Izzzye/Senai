function carregar(){
    const dado = JSON.parse(window.localStorage.getItem("dados"))

    let id = document.querySelector("#id")
    let nome = document.querySelector("#nome")
    let cpf = document.querySelector("#cpf")
    let email = document.querySelector("#email")
    let nascimento = document.querySelector("#nascimento")
    let cep = document.querySelector("#cep")
    let numero = document.querySelector("#numero")
    let complemento = document.querySelector("#complemento")
    let telefones = document.querySelector("#telefones")

    fetch("http://localhost:3000/usuarios")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        data.forEach(cliente => {
            if(cliente.id == dado.id){
            id.value = cliente.id
            nome.value = cliente.nome
            cpf.value = cliente.cpf
            email.value = cliente.email
            nascimento.value = cliente.nascto.split('T')[0]
            cep.value = cliente.endereco.cep
            numero.value = cliente.endereco.numero
            complemento.value = cliente.endereco.complemento
            telefones.value = cliente.telefones
        }

        })
    })

}

function salvar(){
 
    let dados = {
      "id": document.querySelector("#id").value,
      "nome": document.querySelector("#nome").value,
      "cpf": document.querySelector("#cpf").value,
      "email": document.querySelector("#email").value,
      "nascimento": (document.querySelector("#nascimento").value).split('T')[0],
      "cep": document.querySelector("#cep").value,
      "numero": document.querySelector("#numero").value, 
      "complemento": document.querySelector("#complemento").value,
      "telefones": document.querySelector("#telefones").value
    };
    
    // Enviar os dados para o banco de dados...
    
    const options = {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(dados)
      };
      
      fetch('http://localhost:3000/usuarios', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
    
    alert('Dados Alterados')

    console.log(JSON.stringify(dados));

    window.location.reload()
}