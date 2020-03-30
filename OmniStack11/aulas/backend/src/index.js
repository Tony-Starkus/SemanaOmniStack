const express = require('express');
const routes = require('./routes');
const cors = require('cors');

// Criando a aplicação
const app = express();

app.use(cors());
//Informando o app que vamos utilizar o json para enviar dados
app.use(express.json());
app.use(routes);

// Definindo onde a aplicação vai escutar
app.listen(3333);

/**
 * Rota/Recurso -> /users
*/

/**
 * Métodos HTTP:
 * 
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deleter uma informação no back-end
 */

 /**
  * Tipos de Parâmetros:
  * 
  * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação) -> /users?aluno=Diego
  * Route Params: Parâmetros utilizados para identificar recursos -> /users/:id
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos (Ex: criar/alterar user)
  */

  /**
   * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
   * NoSQL: MongoDB, CouchDB, etc.
   */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where() <- Isso garante funcionar em qualquer banco SQL
 */
