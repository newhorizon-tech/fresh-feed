const express = require('express');

const app = express();
const puppeteer = require('puppeteer');

const twitterUrl = 'https://twitter.com/';

const scrape = async (username, twitterUrl) => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  page.goto(`${twitterUrl}${username}`);
};

app.get('/user/:user', async (req, res) => {
  const username = req.params.user;
  await scrape(username, twitterUrl);
  res.send(`User: ${username}`);
});

app.get('/test/', (req, res) => res.send('Node.js/Express works!'));

app.use(express.static('build'));

app.listen(8080);
