const { DataTypes } = require('sequelize');
const {sequelize} = require('../config/dbConnect.js');

const Faixas = sequelize.define('faixas', {
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tempo_reproducao: {
        type: DataTypes.STRING,
        allowNull: false
    },
    num_faixa: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    album_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {});

module.exports = Faixas