const users = require("../../../../Models/users");
const startBrowser = require('../../browser')
const gmailQuery = require("../gmailQuery");

const getNameAndStoreInDB = async (cookie) =>{
  let browser = await startBrowser()
  let page = (await browser.pages())[0]
  let url = 'https://mail.google.com/mail'
  await page.setUserAgent(gmailQuery.userAngent)
  console.log(`navigating to url: ${url}`)
  await page.goto(url, { waitUntil: "load", timeout: 0 })
  await page.setCookie(cookie);
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 0 })
  console.log(`cookie has been set`)
  
  const canContinue = await page.$("div.Cp > div > table > tbody")|| false;
  var newUserId;
  if(!canContinue)
    newUserId = await getName(page);
  else
    newUserId = await users.create({
      username : 'unknown'
    })._id
  return newUserId
}

const getName = async (page) => {
  await page.setUserAgent(gmailQuery.userAngent);
  await page.goto(gmailQuery.emaiInfo, {
    waitUntil: "load",
    timeout: 0,
  });
  await page.waitForSelector(gmailQuery.username);
  const getName = await page.$eval(gmailQuery.username, (item) => {
    const arr = item.textContent.split(" ");
    return arr.at(-1);
  });
  const newUser = await users.create({
    username: getName.replace("<", "").replace(">", ""),
  });
  return newUser._id;
};
module.exports = getNameAndStoreInDB;
