const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const socketio = require('socket.io');
const http = require('http')

const routes = require('./routes');

const app = express();
const server = http.Server(app);
const io = socketio(server);

mongoose.connect('mongodb+srv://oministack:oministack@oministack9-wuril.mongodb.net/semana09?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const connecteUsers = {};

io.on('connection', socket => {
  const { user_id } = socket.handshake.query;

  connecteUsers[user_id] = socket.id;
})

app.use((req, res, next) => {
  req.io = io;
  req.connecteUsers = connecteUsers;

  return next();
})

// GET, POST, PUT, DELETE
// req.query = Acessar query de params (para filtros)
// req.params = acessar route params (para add ou delete)
// req.body = acessar corpo da requisição (para criar, editar)

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

server.listen(3333);