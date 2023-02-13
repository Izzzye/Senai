const express = require('express');// pega de outra pasta

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    let i = 1;
    if(i == 0){
        res.status(200).send("<h1>FUNCIONANDO</H1>").end();
    }else{
        res.status(404).end();
    }
    
});

app.get("/listar", (request, response) => {
    // let nome = request.query.nome; 
    // let matricula = request.query.matricula;

    let {nome, matricula} = request.query; // quarda as variaveis de uma vez
    
    console.log(nome, matricula);
    
    response.status(200).send("<h1>LISTANDO</h1>").end();
});

app.get("/info/:marca/:modelo", (req, res) => {
    let {marca, modelo} = req.params

    console.log(marca, modelo);

    res.status(200).end()
})


app.post("/criar", (request, response) => {
    let {id, nome, matricula} = request.body

    console.log(id, nome, matricula)

    response.status(200).end();
})

app.listen(3000, () => {             // coloca o back no ar
    console.log("Rodando na 3000");
}); 