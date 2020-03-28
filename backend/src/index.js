const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Métodos HTTP:
 * GET: Buscaruma informação do back-end
 * POST: Criar uma informação no back-end, ex criação de novo usuario.
 * PUT alterar uma informação no back-end - alterar um dado do back-end
 * DELETE: Deletar uma informação no back-end
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query Params: Parâmetros nomeados enviados na rota após o "?" (Filtros, paginação)
  *         app.post('/users', (request, response) => {
            const params = request.query;

            console.log(params);
            return response.json({
             evento: 'Semana OmniStack 11.0',
                aluno: 'Danilo Fernandes'
         });
        }); 
  * 
  * Route Params: Parâmetros utilizados para identificar recursos
  *             app.get('/users/:id', (request, response) => {
                const params = request.params;

                console.log(params);
                return response.json({
                   evento: 'Semana OmniStack 11.0',
                  aluno: 'Danilo Fernandes'
            });
        });
  *         
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  */
/*
app.post('/users', (request, response) => {
    const body = request.body;

    console.log(body);
    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Danilo de Lima Fernandes'
    }); transferido para routes.js
});*/

app.listen(3333);