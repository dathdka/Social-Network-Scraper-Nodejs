const gmailQuery = require("../gmailQuery");

const sendEmail = async (page) => {
  await page.click(gmailQuery.createEmailButton);
  await page.waitForSelector(gmailQuery.titleInput);
  await page.type(gmailQuery.emailInput, "datkykhang@gmail.com");
  await page.type(gmailQuery.titleInput, "this is test");
  await page.type(gmailQuery.contentInput, "this is content");
  //send email
  await page.click(gmailQuery.sendEmailButton);
  await page.waitForSelector(gmailQuery.sendConfirm);
  var wait = "";
  while (wait !== "Đã gửi thư") {
    wait = await page.$eval(gmailQuery.sendConfirm, (item) => {
      return item.textContent;
    });
  }
};
module.exports = sendEmail
