const acesso = document.getElementById('acesso');
    acesso.addEventListener('submit', function (evento) {
        evento.preventDefault();

        //Tratar mensagem de erro ao invez de alert
        const erro = document.getElementById('erro');

        const dados = {
            email: acesso.email.value,
            senha: acesso.senha.value
        }

        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dados)
        };

        fetch(`http://localhost:3000/usuarios`, options)
            .then(resp => resp.json())
            .then(resp => {
                if (resp.length > 0) {

                    window.localStorage.setItem('dados', JSON.stringify(resp[0]))
                    window.location.href = `../perfil/perfil.html`;
                } else {
                    //exibe a mensagem de erro
                    erro.textContent = 'Usuário não encontrado';
                }
            })
            .catch(erro => {
                //exibe a mensagem de erro
                erro.textContent = 'Erro ao acessar o servidor';
            });

    });