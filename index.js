const express = require('express')

const app = express()

app.get('/', (req, res) => {
  return res.json({ message: 'API ON' })
})

app.listen(3333)