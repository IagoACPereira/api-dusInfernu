const express = require('express');
const FaixasController = require('../controllers/FaixasController.js');
const faixasRouter = express.Router();
const cors = require('cors');

faixasRouter.post('/faixas/', cors(), FaixasController.add);
faixasRouter.get('/faixas/', cors(), FaixasController.exibirTodos);
faixasRouter.get('/faixas/:id', cors(), FaixasController.exibirUm);
faixasRouter.get('/faixas/album/:idAlbum', cors(), FaixasController.exibirPorIdDoAlbum);
faixasRouter.put('/faixas/:id', FaixasController.atualizar);
faixasRouter.delete('/faixas/:id', cors(), FaixasController.deletar);

module.exports = faixasRouter;