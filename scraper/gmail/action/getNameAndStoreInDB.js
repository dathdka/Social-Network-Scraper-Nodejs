const users = require("../../../models/users");
const startBrowser = require('../../browser')
const gmailQuery = require("../gmailQuery");

const getNameAndStoreInDB = async (cookie) =>{
  var newUserId;
  let browser = await startBrowser()
  let page = (await browser.pages())[0]
  try {
    if(cookie){
      console.log(cookie)
      let url = 'https://mail.google.com/mail'
      await page.setUserAgent(gmailQuery.userAngent)
      console.log(`navigating to url: ${url}`)
      await page.goto(url, { waitUntil: "load", timeout: 0 })
      await page.setCookie(...cookie);
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 0 })
      console.log(`cookie has been set`)
      const canContinue = await page.$('div.Cp > div > table > tbody') || false;
      if(!canContinue){
        console.log(canContinue)
        newUserId = await createUnknownUser()
        console.log('user does not have name')
      }
      else{
        newUserId = await getName(page);
        console.log('user have name')
      }
    }else
      newUserId = await createUnknownUser()  
  } catch (error) {
    console.error(error)
  } finally{
    await page.close()
  }
  return newUserId;
}

const createUnknownUser = async () =>{
    const newUserId = await users.create({
      username : 'unknown',
      updateTime : new Date()
    })
    return newUserId._id;
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
    updateTime : new Date()
  });
  return newUser._id;
};
module.exports = getNameAndStoreInDB;
