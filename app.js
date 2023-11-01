const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

// const jsonErrorHandler = (err, req, res, next) => {
//   res.status(500).send({ error: err });
// }

app.use(bodyParser.json())
app.use(require('./router/router'))


app.use((req, res, next) => {
  res.status(404).json({
      message: 'Ohh you are lost, read the API documentation to find your way back home :)'
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})