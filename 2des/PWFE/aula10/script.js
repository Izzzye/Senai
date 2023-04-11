const buscar = document.querySelector('#busca');
const nome = document.querySelector('#nome');
const data = document.querySelector('#data');
const temperatura = document.querySelector('#temperatura');
const tempo = document.querySelector('#clima');
const umidade = document.querySelector('#umidade');
const velocidade = document.querySelector('#velocidade');
const icon = document.querySelector('#icon');

function clima(){
    let cidade = buscar.value;
    api.get('/history.json?key=5a949a684d404887bd0110910231104&q=' +cidade+ '&lang=pt&dt=2023-04-05&end_dt=2023-04-11&hour=12')
    .then(resp => {
        console.log(resp.data)
        resp.data.forecast.forecastday.forEach(item => {
            icon.src = item.day.condition.icon
            data.innerHTML = "Dia: " + item.date;
            nome.innerHTML = "Cidade: " + resp.data.location.name
            temperatura.innerHTML = "Temperatura: " + item.day.avgtemp_c
            tempo.innerHTML = "Clima: " + item.day.condition.text
            umidade.innerHTML = "Umidade: " + item.day.avghumidity
            velocidade.innerHTML = "Vento: " + item.day.avgvis_km
        })
    })
}