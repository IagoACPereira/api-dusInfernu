const { Sequelize } = require('sequelize')
const mysql2 = require('mysql2')

const sequelize = new Sequelize('dusinfernu', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
})

const mySql = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'dusinfernu',
    password: 'root'
})

async function conexaoDb() {
    try {
        await sequelize.authenticate()
        console.log('Conectou ao Banco!');
    } catch (error) {
        console.log('Não conectou ao banco!');
    }
}

module.exports = {sequelize, conexaoDb, mySql}