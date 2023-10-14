const {sequelize} = require('../config/dbConnect.js')
const {DataTypes} = require('sequelize')

const Generos = sequelize.define('generos', {
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{})

module.exports = Generos