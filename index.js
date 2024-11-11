const express = require('express');
const app = express(); // Método construtor //

const sequelize = require('./config/db');''
const Usuario = require('./models/Usuario');
const Ponto = require('./models/Ponto');

sequelize.sync({ alter: true })
    .then(() => {
        console.log("Sucesso!");
    })
    .catch(error => {
        console.log(`Erro ao sincronizar as tabelas - ${error}`);
    });

sequelize.authenticate()
    .then(() => {
        console.log("Conectado ao bd");
    })
    .catch(error => {
        console.log("Erro ao conectar no bd");
    });

Ponto.create({ tipo: 'E', dataHora: 'sss'})

// app.METODO('rota/caminho', (req, res) => {})

app.get('/users', (req, res) => {
    res.send("Nessa rota vou retornar os usuários");
});

app.post('/users', (req, res) => {
    res.send("Rota users usando post");
});

app.get('/user/:id', (req, res) => {
    console.log(`O parâmetro é ${req.params.id}`);
});

app.post('/user/:id1-:id2', (req, res) => {
    res.send(req.params);
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor web ouvindo na porta ${PORT}`);
});