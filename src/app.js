const express = require('express')
const router = require('./routes/index.js')
const {erro404} = require('./middlewares/midErros.js')
const {conexaoDb} = require('./config/dbConnect.js')
const generosRouter = require('./routes/generosRoutes.js')
const regioesRouter = require('./routes/regioesRoutes.js')
const artistasRouter = require('./routes/artistasRoutes.js')
const gravadorasRouter = require('./routes/gravadorasRoutes.js')
const albunsRouter = require('./routes/albunsRoutes.js')
const faixasRouter = require('./routes/faixasRouter.js')

const configApp = (app) => {

    conexaoDb()
    app.use(
        express.json(),
        express.urlencoded({
            extended: true
        }),
        router,
        generosRouter,
        regioesRouter,
        artistasRouter,
        gravadorasRouter,
        albunsRouter,
        faixasRouter
    )

    app.use(erro404)
}

module.exports = configApp