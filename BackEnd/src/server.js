const express = require('express');

const app = express();

// GET, POST, PUT, DELETE
// req.query = Acessar query de params (para filtros)
// req.params = acessar route params (para add ou delete)
// req.body = acessar corpo da requisição (para criar, editar)

app.use(express.json());

app.post('/users/', (req, res) => {
  return res.json(req.body)
})

app.listen(3333);