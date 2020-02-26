const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://oministack:oministack@oministack9-wuril.mongodb.net/semana09?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

// GET, POST, PUT, DELETE
// req.query = Acessar query de params (para filtros)
// req.params = acessar route params (para add ou delete)
// req.body = acessar corpo da requisição (para criar, editar)

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);