import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload'

import OrphanagesController from './controllers/OrphanagesController';

const routes = Router();
const upload = multer(uploadConfig);

// Recurso nesse caso abaixo é o orphanages

// Rota é o conjunto de tudo

// Métodos HTTP> GET (buscar uma informação), POST (criando uma informação nova), PUT (editar uma informação), DELETE (deletar uma informação)
//O navegador só consegue ler o GET, por isso usamos o software Insomnia, que lê todos os métodos HTTP

// Parâmetros de uma aplicação: 
//Query Params: parâmetros da url. ex.: http://localhost:3333/users?search=vitor (esse search é um query param)
//Routes Params (identificar um recurso). ex.: http://localhost:3333/users/1 (1 é o id do usuário, para identificá-lo)
//Body (corpo da requisição): traz informações mais complexas. que não sabem no routes ou no query.

routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);
routes.post('/orphanages', upload.array('images'), OrphanagesController.create);

export default routes;