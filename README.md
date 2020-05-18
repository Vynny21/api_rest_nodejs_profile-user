# api_rest_nodejs_profile-user

#Instalar o projeto:
[
git clone "https://github.com/Vynny21/api_rest_nodejs_profile-user/new/dev?readme=1";
yarn install
]

#Frameworks e Bibliotecas:
[
Node.js, Express, PostgresSQL, Sequelize, Jest, JWT, Bcrypt, Faker e Factory-Girl,
Sucrase, ESLint, DotEnv, EditorConfig e Prettier
]

#Executar testes:
[
yarn test
]

#Estrutura do projeto:

*lowercase: arquivo
*uppercase: pasta

*SRC
  -APP
    -CONTROLLERS
    -MIDDLEWARE
    -MODELS
    -SCHEMAS
  -CONFIG
  -DATABASE
  -ROUTES
  -app
  -server

  app: arquivos de código do servidor em si.
  app/controllers: controladores das rotas.
  app/middlewares: arquivos intermediadores de rotas.
  app/models: modelos representando as tabelas do banco de dados relacional.
  app/schemas: schemas do mongoDB.
  config: arquivos de configurações em geral, banco de dados, autorização, email, etc.
  database: migrations do seu banco de dados relacional.
  lib: utilitarios, pode se chamado de util se preferir.
  app.js: Main da aplicação.
  routes.js: Rotas do servidor.
  server.js: inicializar o servidor, usando o arquivo app.js. Pode ser chamado de index.js se preferir.


#Estrutura do Controller:
[
  index() { } !/ Listagem de usuários
  show() { } !/ Exibir um único usuário
  store() { } !/ Cadastrar usuário
  update() { } !/ Alterar usuário
  delete() { } !/ Remover usuário
]
