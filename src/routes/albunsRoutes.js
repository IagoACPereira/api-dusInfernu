const express = require('express');
const AlbunsController = require('../controllers/AlbunsController');
const albunsRouter = express.Router();
const cors = require('cors');

albunsRouter.post('/albuns/', cors(), AlbunsController.add);
albunsRouter.get('/albuns/', cors(), AlbunsController.exibirTodos);
albunsRouter.get('/albuns/artista/:id', cors(), AlbunsController.exibirAlbumPorIdBanda);
albunsRouter.get('/albuns/:id', cors(), AlbunsController.exibirUm);
albunsRouter.put('/albuns/:id', cors(), AlbunsController.atualizar);
albunsRouter.delete('/albuns/:id', cors(), AlbunsController.deletar);

module.exports = albunsRouter