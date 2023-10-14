const express = require('express')
const RegioesController = require('../controllers/RegioesController.js');
const cors = require('cors');

const regioesRouter = express.Router()

regioesRouter.post('/regioes', cors(), RegioesController.add)
regioesRouter.get('/regioes', cors(), RegioesController.exibirTodos)
regioesRouter.get('/regioes/:id', cors(), RegioesController.exibirUm)
regioesRouter.put('/regioes/:id', cors(), RegioesController.atualizar)
regioesRouter.delete('/regioes/:id', cors(), RegioesController.deletar)

module.exports = regioesRouter