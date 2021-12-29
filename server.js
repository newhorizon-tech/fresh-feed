const express = require('express');
const app = express();


app.get('/user/:user', (req, res) => {
  const username = req.params.user;
  console.log(username)
  res.send(`User: ${username}`)
})

app.get('/test/', (req, res) => res.send('Node.js/Express works!'))


app.listen(8080)
