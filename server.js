const express = require('express')
const {
  engine
} = require('express-handlebars')
const bodyParser = require('body-parser')
const routes = require('./routes')
const assert = require('assert');
const db = require('./config/db');

const app = express()

app.use(express.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

// Template engine
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');
app.use(express.static('./public'))

app.use(routes)

db.initDb((err, db) => {
  if (err) {
    console.log(err)
  } else {
    console.log('conectado com sucesso!')
    app.listen(4000, () => console.log('Running on port 4000'))
  }
})