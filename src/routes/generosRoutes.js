const express = require('express')
const GenerosController = require('../controllers/GenerosController.js')
const cors = require('cors')

const generosRouter = express.Router()

generosRouter.post('/generos',cors(), GenerosController.add)
generosRouter.put('/generos/:id',cors(), GenerosController.atualizar)
generosRouter.get('/generos/',cors(), GenerosController.exibirTodos)
generosRouter.get('/generos/:id',cors(), GenerosController.exibirUm)
generosRouter.delete('/generos/:id',cors(), GenerosController.deletar)


module.exports = generosRouter