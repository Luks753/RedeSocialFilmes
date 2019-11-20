const express = require('express');
const app = express();
const mongoose = require('./config/database');
const bodyParser = require('body-parser');



mongoose.connection.on('error', (err) => {
    console.log('Erro na conexão com o banco de dados: ' + err);
})

mongoose.connection.on('disconnected', () => {
    console.log('Aplicação desconectada do banco de dados!');
})

mongoose.connection.on('connected', () => {
    console.log('Aplicação conectada ao banco de dados!');
})

//BODY PARSER
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const indexRoute = require('./db_apis/root');

app.use('/', indexRoute);

require('./Rota/authController')(app);
require('./Rota/movies')(app);
require('./Rota/feed')(app);

app.listen(3000);

module.exports = app;