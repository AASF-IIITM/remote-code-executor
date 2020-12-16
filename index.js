console.log("Hello World ")
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hi!')
})
app.get('/', (req, res) => {
    res.send('hey Poorvi!')
  })
app.listen(3000, () => console.log('Server ready'))
