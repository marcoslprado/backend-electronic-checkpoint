const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Usuario = sequelize.define('Usuario', {
    id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
},
{
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
    permissao: {
        type: DataTypes.ENUM('USER', 'ADM'),
        allowNull: false
    }
},
{
    timestamps: true
});

module.exports = Usuario;