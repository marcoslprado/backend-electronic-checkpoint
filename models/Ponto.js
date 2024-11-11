const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Ponto = sequelize.define('Ponto', {
    id_ponto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
},
{
    dataHora: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
    passado: {
        type: DataTypes.BOOLEAN
    }
},
{
    editado: {
        type: DataTypes.BOOLEAN
    }
},
{
    localizacao: {
        type: DataTypes.STRING
    }
},
{
    tipo: {
        type: DataTypes.ENUM('E', 'S', 'I', 'V'),
        allowNull: false
    }
},
{
    timestamps: true
});

module.exports = Ponto;