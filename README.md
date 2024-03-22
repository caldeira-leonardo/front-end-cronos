# Começando com a aplicação

O projeto busca fazer a manipulação e mostragem de dados que a genrencia de um grupo e também de itens que possam ser colocados dentro desses grupos.
Essa gerência é constituida por mostrar os grupos e itens existentes no banco de dados, ser possível não somente a criação mas também a alteração e remoção desses itens.

## Scripts disponíveis

No diretório do projeto para que seja é necessário termos o `nodeJS` instalado, o mesmo pode ser baixado [aqui](https://nodejs.org/en/download) para windows e MacOS ou
utilizando esse script para instala-lo no linux
`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash`

após a instalação do `nodeJS` é interessante verificar sua versão com o comando `node -v` no terminal, caso de erro refaça o passo a cima mas caso apareça a versão do mesmo
basta entrar dendo do diretório da aplicação e utilizar os seguintes scripts para instalar os pacotes da aplicação e inicia-la:

### `npm i`

irá instalar as dependencias do projeto

### `npm start`

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para visualizar o projeto.

### `npm run server`

irá abrir um servidor na porta http://localhost:3001 que será nosso banco de dados.

## Contexto

<ul>
    <li>receber os dados que estão vindo do backend e coloca-los em uma variável global</li>
    <li>CRUD de grupos</li>
    <li>Criação, listagem e remoção de itens</li>
    <li>Listagem de grupos filtrados pelos proprietários dos grupos</li>
</ul>

## Tecnologias e Ferramentas Utilizadas

No projeto foram utilizadas as seguintes ferramentas:

- [React.js](https://reactjs.org/) - Biblioteca para criar interfaces de usuários
- [Material UI](https://mui.com/material-ui/getting-started/) - Biblioteca que ajuda na implementação do design do google
- [Redux & Redux-tollkit](https://redux.js.org/introduction/getting-started) - Biblioteca para gerenciamento de estados
- [axios](https://axios-http.com/ptbr/docs/intro) - Biblioteca utilizada para a comunicação entre Frontend e Backend
- [json-server](https://www.npmjs.com/package/json-server) - Biblioteca utilizada para simulação do backend
- [react-hook-form](https://react-hook-form.com/docs) - Biblioteca utilizado para manipulaçao de formulários
- [react-router-dom](https://reactrouter.com/en/main/start/tutorial) - Biblioteca utilizada para manuseio das rotas existentes na aplicação
- [typescript](https://www.typescriptlang.org/docs/) - Superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem.

Foi escolhido React.js por ser uma biblioteca que conseuge abrangir todo o escopo do projeto além de ser amplamente utilizada na criação de interfaces de usuários, o Material UI foi utilizado para facilitar o design da aplicação
já que a biblioteca possui uma variedade muito grande de componentes que podem ser utilizados. Redux & Redux-tollkit
foram escolhidos pois possuem um poder de manuseio de estado extremamente algo, possibilitando a utilização do redux Saga com o escalonamento do projeto.
Para a integração entre Frontend e Backend foi utilizado o axios por ser uma biblioteca de facil utilização e como não há um backend para a aplicação foi escolhido o json-server para simular esse backend. Para o manuseio das rotas foi utilizado o react-router-dom pois possui muitas funcionalidades interessantes, como aninhamento de rotas, validação de permissões, além de ser de facil manuseio. react-hook-form foi utilizado para a manipulação dos formulários pois também tem uma gama grande de funcionalidades e por ultimo foi utilizado o typescript para principalmente validar erros de sintaxe em tempo de desenvolvimento e não com a aplicação já sendo executada.

## Estrutura das pastas do projeto
