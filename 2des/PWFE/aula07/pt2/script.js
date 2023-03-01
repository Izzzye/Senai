const body = document.querySelector("body") 
const modal = document.querySelector(".modal") 

fetch("https://jsonplaceholder.typicode.com/users") // acessa a url
.then((resp) => {
    return resp.json()  //pega o conteudo do body
})
.then((users) => {
    users.forEach((user) =>{
       let name = document.createElement("p") 
       let city = document.createElement("p")
       
       name.innerHTML = `Nome : ${user.name}`
       city.innerHTML = `Cidade : ${user.address.city}`

        city.className = "pcidade"

        city.addEventListener("click", () => {
            buscarUsuario(user.id)
        })

       body.appendChild(name)
       body.appendChild(city)
    })
})

function buscarUsuario(id){
    fetch("https://jsonplaceholder.typicode.com/users/" + id)
    .then((resp) => {
        return resp.json()
    })
    .then(user => {
        let { zipcode, street, suite } = user.address

        document.querySelector("#cep").innerHTML = `CEP : ${zipcode}`
        document.querySelector("#rua").innerHTML = `Rua : ${street}`
        document.querySelector("#ap").innerHTML = `Apartamento : ${suite}`
        toggleModal()
    })
}


function toggleModal(){
    modal.classList.toggle("show")
}
