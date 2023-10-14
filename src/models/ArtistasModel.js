const { DataTypes } = require('sequelize')
const {sequelize} = require('../config/dbConnect.js')

const Artistas = sequelize.define('artistas', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ano_formacao: {
        type: DataTypes.INTEGER,
    },
    ativa: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    genero_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    regiao_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    descricao: {
        type: DataTypes.TEXT
    }
}, {})

module.exports = Artistas