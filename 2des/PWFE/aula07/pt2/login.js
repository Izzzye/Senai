const email = document.querySelector("#email") 
const senha = document.querySelector("#senha")

function autenticar(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(resp => {return resp.json()})
    .then(users => {
        let user = users.find((valor, indice) => {
            return ((valor.email == email.value) && (valor.username == senha.value))
        })

        if(user != undefined){
            window.location.href = "./index.html"
        }else{
            alert("Usuario ou Senha Inválidos")
        }
    })
}