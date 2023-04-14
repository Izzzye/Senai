const nome = document.querySelector ("#nome");
const telefone = document.querySelector ("#telefone");
const email = document.querySelector ("#email");
const senha = document.querySelector ("#senha");

function cadastrar() {
    let dados = {
        nome: nome.value,
        telefone: telefone.value,
        email: email.value,
        senha: senha.value
    }

    api.post("/cliente/criar", dados)
    .then(resp => {
        if(resp.status == 201){
            window.location.href = "../pages/home.html"
            alert("Cadastrado com sucesso!!");
        }
    })
    .catch((err) => {
        alert(err.response.data.err)
    })

    nome.value =""
    telefone.value = ""
    email.value = ""
    senha.value = ""
}