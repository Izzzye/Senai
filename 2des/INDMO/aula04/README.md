# Exibindo objetos e listas - Aula04

- Mokups
- FlatList
- Componentes

|Mockups|
|-|
|![Mockup](./mockup.jpg)|
|O mockup é uma representação gráfica que simula o tamanho, formato, perspectiva, textura, cor e diversos outros detalhes no desenvolvimento de um projeto. Ele é a melhor forma de visualizar o design de maneira clara e realista, sem que ele entre em produção.<br> Em programação Front-End ou Mobile utilizamos o mesmo conceito para representar dados que futuramente serão recebidos de uma API|

- Exemplo:<br>userMock.js
```javascript
const user = {
  username: 'admin',
  password: '1234',
};
export default user;
```
## FlatList
Componente que exibe uma lista de outros componentes na tela, ideal para listar objetos JSON oriundos de uma API

- Segue o tutorial de como criar um aplicativo com estes recursos: [Tutorial](./tutorial.md)
- Esta aula possui mais dois Apps de exemplo com FlatList, Componentes e Mockups
  - ./clientes
  - ./produtos

# Atividades
Com os conhecimentos adquiridos nas demonstrações desta aula e neste repositório.

|Contextualização|Desafio|
|-|-|
|Projeto Cursos SENAI, A escola de Jaguariúna precisa de um aplicativo para divulgação de nossos cursos, utilize o nosso [Site](https://jaguariuna.sp.senai.br/) como fonte de dados e desenvolva| Crie um aplicativo para divulgação dos cursos do SENAI, com três telas empilhadas:<br>- A primeira com as três categorias: Técnicos, CAI e FIC<br>- Ao escolher uma categoria ver uma lista dos cursos que o SENAI Jaguariúna oferece:<br>- Ao clicar em um curso ver os **detalhes** deste.<br>**Obs:** Coloque um link em cada curso que direcione para o site do SENAI onde o aluno possa fazer a matrícula|
