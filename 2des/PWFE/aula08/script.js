const inpEmail = document.querySelector("#email")
const inpPassword = document.querySelector("#password")

const base = [
    {
        "email":"teste@gmail.com",
        "password": "123",
        "nome": "Teste Testador",
        "id": 1
    },
    {
        "email":"julinha@gmail.com",
        "password": "1205",
        "nome": "Julia da Silva",
        "id": 2
    },
    {
        "email":"cleber@gmail.com",
        "password": "1502",
        "nome": "Cleber Solza",
        "id": 3
    }
]

function autenticar(){
    let email = inpEmail.value
    let password = inpPassword.value

    let user = base.find((user) => {
        return ((user.email == email) && (user.password == password))
    })

    if (user != undefined) {
        let info = {
            "id": user.id,
            "nome": user.nome
        }

        localStorage.setItem("user", JSON.stringify(info))

        window.location.href ="./home.html"
    }else{
        alert("CAI FORA MENÓ")
    }

}




    // let infoUser = {
    //     "email": email,
    //     "password": password
    // }

    // let options = {
    //     "method": "POST",
    //     "headers": {
    //         "Content-Type": "application/json"
    //     },
    //     "body": JSON.stringify(infoUser)
    // }

    // fetch("http://hostapi.com:3000/login", options)
    // .then(resp => {return resp.json()})
    // .then(data => {
    //     data ={
    //         "id":1,
    //         "username": "Fulano",
    //         "role": "administrator"
    //     }
    //     console.log(data)
    // })

    // if((email == "fulano@gmail.com") && (password == "12345")){
    //     let info = {
    //         "username": "Fulano da Silva",
    //         "userId": "5"
    //     }
    //     localStorage.setItem("userdata", JSON.stringify(info))

    //     window.location.href  = "./home.html"
        
    // }else{
    //     alert("Login failed")
    // }