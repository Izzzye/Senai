const inpMatricula = document.querySelector("#matricula")
const inpSenha = document.querySelector("#password")

const base = [
    {
        "nome": "Jair Javindo",
        "matricula": 132455,
        "senha": "asd321",
        "salario": 2570.80,
        "responsavel": [
            {
                "cod": "ca3321",
                "endereco": "Rua sem calçada, 59",
                "valor": 455000
            },
            {
                "cod": "ap1221",
                "endereco": "Alameda dos Santos, 22, AP.52",
                "valor": 205000
            },
            {
                "cod": "ap1205",
                "endereco": "Alameda dos Anjos, 78, AP.11",
                "valor": 208000
            }

        ]
    },
    {
        "nome": "Robson Clebson",
        "matricula": 154785,
        "senha": "poi789",
        "salario": 3000.80,
        "responsavel": [
            {
                "cod": "ca7845",
                "endereco": "Rua das flores, 76",
                "valor": 500000
            },
            {
                "cod": "ap9562",
                "endereco": "Avendia dos Ratos, 45, AP. 45",
                "valor": 180000
            }

        ]
    }
]

function autenticar(){
    let matricula = inpMatricula.value
    let senha = inpSenha.value

    let user = base.find((user) =>{
        return ((user.matricula == matricula) && (user.senha == senha))
    })

    if (user != undefined){
        let info = {
            "matricula": user.matricula,
            "nome": user.nome,
            "imoveis": user.responsavel
        }

        localStorage.setItem("user", JSON.stringify(info))

        window.location.href = "./casas.html"
    }else{
        alert("Matrícula ou Senha inválidos.")
    }
}