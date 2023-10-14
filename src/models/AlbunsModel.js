const {sequelize} = require('../config/dbConnect.js');
const {DataTypes} = require('sequelize');

const Albuns = sequelize.define('albuns', {
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ano_lancamento: {
        type: DataTypes.INTEGER,
    },
    imagem_album: {
        type: DataTypes.STRING,
        allowNull: false
    },
    link_video: {
        type: DataTypes.STRING
    },
    artista_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    gravadora_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {});

module.exports = Albuns;