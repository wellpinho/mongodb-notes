const {
  MongoClient
} = require('mongodb')
const url = 'mongodb://localhost:27017/notesdb';

let _db;

const initDb = (callback) => {
  MongoClient.connect(url)
    .then(client => {
      _db = client
      callback(null, _db)
    })
    .catch(err => {
      callback(err)
    })
}

const getDb = () => {
  return callback()
}

module.exports = {
  initDb,
  getDb
}