const {
  Router
} = require('express')
const {
  ObjectId
} = require('mongodb')
const db = require('./../config/db')

const routes = Router()

routes.get('/', (req, res) => {
  res.render('home')
})

routes.post('/create', (req, res) => {
  const {
    title,
    description
  } = req.body

  db.getDb().db().collection('notes')
    .insertOne({
      title,
      description
    })

  return res.redirect(201, '/')
})

routes.get('/create', (req, res) => {
  res.render('create')
})

module.exports = routes