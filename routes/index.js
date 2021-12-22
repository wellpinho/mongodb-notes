const {
  Router
} = require('express')
const {
  ObjectId
} = require('mongodb')
const db = require('./../config/db')

const routes = Router()

routes.get('/', async (req, res) => {
  const notes = await db.getDb().db().collection('notes').find({}).toArray()
  res.render('home', {
    notes
  })
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

  res.redirect(301, '/')
})

routes.get('/create', (req, res) => {
  res.render('create')
})

routes.post('/delete', async (req, res) => {
  const data = req.body
  const id = new ObjectId(data.id)

  const noteExists = await db.getDb().db().collection('notes').findOne({
    _id: id
  })

  if (!noteExists) {
    return res.status(400).json({
      message: 'Notes not found!'
    })
  }

  await db.getDb().db().collection('notes').deleteOne({
    _id: id
  })

  res.redirect(301, '/')
})

module.exports = routes