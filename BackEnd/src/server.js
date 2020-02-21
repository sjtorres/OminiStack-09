const express = require('express');

const app = express();

// GET, POST, PUT, DELETE
// req.query = Acessar query de params

app.get('/users', (req, res) => {
  return res.json({ idade: req.query.idade })
})

app.listen(3333);