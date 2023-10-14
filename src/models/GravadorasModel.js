const { DataTypes } = require('sequelize')
const {sequelize} = require('../config/dbConnect.js')

const Gravadoras = sequelize.define('gravadoras', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    regiao_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{})

module.exports = Gravadoras