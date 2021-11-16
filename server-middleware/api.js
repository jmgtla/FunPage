const app = require('express')()

app.get('/getJSON', (req, res) => {
  res.send({ data: 'dataaa' })
})

module.exports = app
