var express = require('express')
var r = express.Router()

r.get('/', function(req, res) {
  res.json('test')
})

r.get('/about', function(req,res) {
  res.json('about us')
})
r.get('/show-config', function(req,res) {
  let result = 
    {
      "db_username": process.env.DB_USERNAME,
      "db_password": process.env.DB_PASSWORD,
      "db_host": process.env.DB_HOST,
      "db_port": process.env.DB_PORT,
      "db_name": process.env.DB_NAME,
    }
  
  res.json(result)
})

module.exports = r


