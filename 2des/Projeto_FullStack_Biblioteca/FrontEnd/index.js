const uri = 'http://localhost:3001/livro'
const cadastro = document.querySelector('#cadastro')
const corpo = document.querySelector('#corpo')


fetch(uri + '/listar', { method: 'GET'})
    .then(resp => resp.json())
    .then(resp => montarTabela(resp))
    .catch(err => console.error(err))

cadastro.addEventListener('submit', e => {
    e.preventDefault()

    const body = {
        
    }
})