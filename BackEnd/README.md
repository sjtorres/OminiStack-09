# BackEnd com NodeJS

Comandos e Métodos importantes

## Inicialização

* yarn init
* yarn add express
* yarn add nodemon
* yarn add mongoose
* yarn add multer

## Métodos

* 'GET' // buscar informações
* 'POST' // criar informações
* 'PUT' // editar informações
* 'DELETE' // apagar informações

* // req.query = Acessar query de params (para filtros)
    'app.get('/users', (req, res) => {
      return res.json({ idade: req.query.idade })
    })'

* // req.params = acessar route params (para add ou delete)
    'app.put('/users/:id', (req, res) => {
      return res.json({ idade: req.params.id })
    })'

* // req.body = acessar corpo da requisição (para criar, editar)
    'app.post('/users/', (req, res) => {
      return res.json(req.body)
    })'

## Metodos do Controller
'module.exports = {
  index()
}'

* 'index' // retorna uma listagem
* 'show' // retorna uma única session
* 'store' // criar uma session
* 'update' // alterar uma session
* 'destroy' // deletar uma session