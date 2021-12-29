const express = require('express');
const path = require('path')
const app = express();


app.get('/user/:user', (req, res) => {
  const username = req.params.user;
  console.log(username)
  res.send(`User: ${username}`)
})

app.get('/test/', (req, res) => res.send('Node.js/Express works!'))

app.use(express.static('build'))


app.listen(8080)
