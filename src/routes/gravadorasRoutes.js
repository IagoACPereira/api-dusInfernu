const express = require('express');
const GravadorasController = require('../controllers/GravadorasController.js');
const cors = require('cors');

const gravadorasRouter = express.Router();

gravadorasRouter.post('/gravadoras/', cors(), GravadorasController.add);
gravadorasRouter.get('/gravadoras/', cors(), GravadorasController.exibirTodos);
gravadorasRouter.get('/gravadoras/:id', cors(), GravadorasController.exibirUm);
gravadorasRouter.put('/gravadoras/:id', cors(), GravadorasController.atualizar);
gravadorasRouter.delete('/gravadoras/:id', cors(), GravadorasController.deletar);

module.exports = gravadorasRouter;