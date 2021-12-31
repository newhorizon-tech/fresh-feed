const express = require('express');

const app = express();
const puppeteer = require('puppeteer');

const twitterUrl = 'https://twitter.com/';

const scrape = async (username, twitterUrl) => {
  let tweets = []
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  page.goto(`${twitterUrl}${username}?lang=en`);
  await page.waitForXPath(
   "//div[contains(@aria-label,'Timeline')]"
  );
  await console.log("loaded")
  await page.waitForTimeout(1000)
  tweets = await page.evaluate(() => {
    const timeline = document.querySelector("section div");
    const content = timeline.querySelectorAll("article div[lang][dir]");
    console.log(content)
    return Array.from(content, e => e.textContent)
  },);
  console.log(tweets)
  return tweets
};

app.get('/user/:user', async (req, res) => {
  const username = req.params.user;
  const tweets = await scrape(username, twitterUrl);
  res.json(tweets);
});

app.get('/test/', (req, res) => res.send('Node.js/Express works!'));

app.use(express.static('build'));

app.listen(8080);
