const express = require('express');

const app = express();
const puppeteer = require('puppeteer');

const twitterUrl = 'https://twitter.com/';

const scrape = async (username, twitterUrl) => {
  let tweets = []
  const browser = await puppeteer.launch({ headless: true });
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
    return Array.from(content, e => e.textContent.trim())
  },);
  return tweets
};

app.get('/user/:user', async (req, res) => {
  const username = req.params.user;
  let tweets = await scrape(username, twitterUrl);
  let tweetsObj = {}
  tweets.forEach((x,i) => {
    console.log(i);
    console.log(JSON.stringify(x));
    tweetsObj[i] = {id:i, content: x}
    console.log('---------------------------');
  })
  console.log(tweetsObj)
  res.set({
       "Content-Type": "application/json",
       "Access-Control-Allow-Origin": "*",
   });

  res.json(tweetsObj);
});

app.use(express.static('build'));

app.listen(8080);
