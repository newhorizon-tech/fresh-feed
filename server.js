const express = require('express');

const app = express();
const puppeteer = require('puppeteer');

const twitterUrl = 'https://twitter.com/';

const mergeArrayIntoSet = (arr, set) => {
  arr.forEach((e) => set.add(e))
}

const getTweets = async (page) => {
  const data = await page.evaluate(() => {
    const timeline = document.querySelector("section div");
    const content = timeline.querySelectorAll("article div[lang][dir]");
    const lastElement = content[content.length - 1];
    const tweetsText = Array.from(content, e => e.textContent.trim());
    lastElement.scrollIntoView();
    return tweetsText;
  }, );
  return data
}

const scrape = async (username, twitterUrl, puppeteer) => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  page.goto(`${twitterUrl}${username}?lang=en`);
  await page.waitForXPath(
    "//div[contains(@aria-label,'Timeline')]"
  );
  await console.log("loaded")
  await page.waitForTimeout(100)

  const tweetSet = new Set([]);

  for (let i = 0; i < 5; i++) {
    const tweetsText = await getTweets(page);
    mergeArrayIntoSet(tweetsText, tweetSet)
    await page.waitForTimeout(100)
  }

  return tweetSet;
};

app.get('/user/:user', async (req, res) => {
  const username = req.params.user;
  let tweets = await scrape(username, twitterUrl, puppeteer);
  let tweetsObj = {}
  tweets.forEach((x, i) => {
    console.log(i);
    console.log(JSON.stringify(x));
    tweetsObj[i] = {
      id: i,
      content: x
    }
    console.log('---------------------------');
  })
  res.set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  });

  res.json(tweetsObj);
});

app.use(express.static('build'));

app.listen(8080);
