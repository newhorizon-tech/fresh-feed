const express = require('express');

const app = express();
const puppeteer = require('puppeteer');



app.get('/user/:user', async (req, res) => {
  const username = req.params.user;
  await scrape(username, twitterUrl);
  res.send(`User: ${username}`);
});

app.get('/test/', (req, res) => res.send('Node.js/Express works!'));

app.use(express.static('build'));

app.listen(8080);
