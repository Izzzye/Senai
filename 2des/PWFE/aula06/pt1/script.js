const data =[
    {
        "titulo":"titulo3",
        "texto":"texto123"
    },
    {
        "titulo":"titulo4",
        "texto":"texto1234"
    },
    {
        "titulo":"titulo5",
        "texto":"5texto"
    }
];

const body = document.querySelector('body');
const card = document.querySelector(".card");


for(let i=0; i < data.length; i++) {
    var clone = card.cloneNode(true);

    clone.querySelector("h3").innerHTML = data[i].titulo;
    clone.querySelector("p").innerHTML = data[i].texto;

    clone.querySelector("button").addEventListener("click",(e) => {
       console.log(e)
    });

    body.appendChild(clone);
}



