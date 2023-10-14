const {sequelize} = require('../config/dbConnect.js')
const {DataTypes} = require('sequelize')

const Regioes = sequelize.define('regioes', {
    pais: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {})

module.exports = Regioes