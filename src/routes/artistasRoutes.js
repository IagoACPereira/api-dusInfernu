const express = require('express')
const ArtistasController = require('../controllers/ArtistasController.js')
const cors = require('cors');

const artistasRouter = express.Router()

artistasRouter.post('/artistas', cors(), ArtistasController.add)
artistasRouter.get('/artistas', cors(), ArtistasController.exibirTodos)
artistasRouter.get('/artistas/:id', cors(), ArtistasController.exibirUm)
artistasRouter.put('/artistas/:id', cors(), ArtistasController.atualizar)
artistasRouter.delete('/artistas/:id', cors(), ArtistasController.deletar)

module.exports = artistasRouter