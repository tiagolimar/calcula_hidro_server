# Calcula Hidro Server

Veja o projeto funcionando no link:
[CalculaHidro Server](https://calcula-hidro-server.vercel.app/){:target="_blank"}

## Descrição do Projeto:

Este projeto full-stack foi criado com o propósito de fornecer uma experiência prática no desenvolvimento de aplicações web, abrangendo tanto o front-end quanto o back-end. Ele serve como uma plataforma de aprendizado para iniciantes e oferece uma estrutura escalável para aplicativos mais complexos no futuro.

### Principais Características:

1. Front-End Reactivo: Utiliza a biblioteca React para construir uma interface de usuário reativa e eficiente.

1. Roteamento com React Router: Implementa roteamento de página para navegação fluida entre diferentes partes do aplicativo.

1. Bootstrap para Estilo: Utiliza o Bootstrap para um design responsivo e uma experiência de usuário visualmente atraente.

1. Comunicação com Back-End: Estabelece comunicação eficiente com o back-end por meio de solicitações HTTP usando a biblioteca Axios.

1. Back-End Node.js e Express: Desenvolvido com Node.js e Express, proporcionando um servidor robusto para manipulação de solicitações e respostas.

1. Persistência de Dados com Sequelize: Utiliza o Sequelize como ORM para interagir com o banco de dados, facilitando a manipulação dos dados.

1. Banco de Dados Neon Tech: Integração com o banco de dados fornecido pela Neon Tech, oferecendo uma solução confiável para armazenamento de dados.

1. Hospedagem na Vercel e Render: Demonstração de como implantar a aplicação no Vercel para o front-end e no Render para o back-end.

Este projeto serve como um ponto de partida para aprender e praticar conceitos essenciais de desenvolvimento web full-stack, capacitando desenvolvedores a explorar e aplicar essas habilidades em projetos futuros.

## Tecnologias Utilizadas

### Front End

- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- [Bootstrap](https://getbootstrap.com/)
- [Axios](https://axios-http.com/)
- [React Toastify](https://fkhadra.github.io/react-toastify/)

### Back End

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)
- [MySQL2](https://www.npmjs.com/package/mysql2)
- [Cors](https://www.npmjs.com/package/cors)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [PostgreSQL (PG)](https://www.npmjs.com/package/pg)

## Configuração e Instalação

1. **Clone o repositório:**

    ```bash
    git clone https://github.com/tiagolimar/calcula_hidro_server.git
    ```

2. **Front End:**

    ```bash
    cd app
    npm install
    ```

3. **Back End:**

    ```bash
    cd server
    npm install
    ```

4. **Execute o aplicativo em modo de desenvolvimento:**

    ```bash
    # No diretório 'app' para o Front End
    npm run dev

    # No diretório 'server' para o Back End
    npm start
    ```

## Uso

### Cadastro de Novos Tubos

Endpoint: `/`

1. Abra o aplicativo no navegador.
2. Navegue até a página de cadastro.
3. Preencha o formulário e clique no botão "Cadastrar".

### Exibição e Exclusão de Tubos Cadastrados

Endpoint: `/Tubos`

1. Acesse a página de Tubos no navegador.
2. Visualize a lista de tubos cadastrados.
3. Para excluir um tubo, clique no botão "Excluir" ao lado do tubo desejado.

## Banco de Dados

O banco de dados é fornecido pela [Neon Tech](https://neon.tech/). É possível também configurar um banco de dados local para teste, neste caso configure as variáveis de ambiente necessárias no arquivo `.env` no diretório 'server' e configure corretamente a variável `URL_BASE` no arquivo `app\src\components\Geral\url.js`.

Exemplo `.env`:

```env
PGHOST=seu-host
PGPORT=sua-porta
PGUSER=seu-usuario
PGPASSWORD=sua-senha
PGDATABASE=seu-database
PGDIALECT=seu-dialeto
```

## Hospedagem
- Front End: [Vercel](https://vercel.com/)
- Back End: [Render](https://dashboard.render.com/)

## Contribuição
Se deseja contribuir para este projeto, fico feliz em receber sua participação! Este projeto é voltado principalmente para fins educacionais, proporcionando uma oportunidade de prática e aprendizado em desenvolvimento full-stack.

Aceitamos contribuições que visem aprimorar as práticas de codificação, tornar o código mais claro e educativo, e incorporar melhores práticas. Seja bem-vindo para propor melhorias no código, documentação ou qualquer outra sugestão que contribua para a qualidade e a experiência educacional deste projeto.
