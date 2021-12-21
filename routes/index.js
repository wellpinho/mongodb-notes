const {
  Router
} = require('express')

const routes = Router()

routes.get('/', (req, res) => {
  res.render('home')
})

routes.get('/create', (req, res) => {
  res.render('create')
})

module.exports = routes