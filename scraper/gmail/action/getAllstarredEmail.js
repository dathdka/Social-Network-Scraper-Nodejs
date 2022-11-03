const gmailQuery = require("../gmailQuery");

const getAllStarredEmail = async (page) => {
    await page.setUserAgent(gmailQuery.userAngent);
    await page.goto(gmailQuery.starredEmail, {
      waitUntil: "load",
      timeout: 0,
    });
    await page.waitForSelector(gmailQuery.waitForEmailLoaded);
    const quantity = await page.$$eval(gmailQuery.everyEmailStarred, (items) => {
      return items.length;
    });
    for (let i = 1; i <= quantity; i++) {
      await page.waitForSelector(gmailQuery.waitForEmailLoaded);
      //click every single email
      await page.click(
        `div > div > div.ae4.UI.nH.oy8Mbf > div.Cp > div > table > tbody > tr:nth-child(${i})`
      );
      await page.waitForSelector("div.a3s.aiL");
      const sender = await page.$eval(gmailQuery.sender, (item) => {
        return item.textContent;
      });
      console.log(sender);
      const title = await page.$eval(gmailQuery.emailTitle, (item) => {
        return item.textContent;
      });
      console.log(title);
      const content = await page.$eval(gmailQuery.emailContent, (item) => {
        return item.textContent;
      });
      console.log(content);
      await page.goBack();
    }
  };

module.exports = getAllStarredEmail