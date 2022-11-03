const gmailQuery = {
  userAngent:
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36",
  createEmailButton:
    "body > div > div.nH > div > div.nH.aqk.aql.bkL > div.aeN.WR.nH.oy8Mbf > div.aic > div > div",
  emailInput: "div > div.afp > div > div > div > div > div > input",
  titleInput: ".aoD > .aoT",
  contentInput: "#undefined > tbody > tr > td.Ap > div.Ar.Au > div",
  sendEmailButton: ".dC > div",
  starredEmail: "https://mail.google.com/mail/u/0/?pli=1#starred",
  waitForEmailLoaded:
    "div > div > div.ae4.UI.nH.oy8Mbf > div.Cp > div > table > tbody",
  everyEmailStarred:
    "div > div > div.ae4.UI.nH.oy8Mbf > div.Cp > div > table > tbody > tr",
  emaiInfo: "https://mail.google.com/mail/u/0/?pli=1#settings/accounts",
  sender:
    "div.adn.ads > div.gs > div.gE.iv.gt > table > tbody > tr:nth-child(1) > td.gF.gK > table > tbody > tr > td > h3 > span > span > span",
  emailTitle: "div.ha > h2",
  emailContent: "div.a3s.aiL",
  username:
    "div > div.nH.v9 > div > div > div > div > div:nth-child(4) > div > table > tbody > tr:nth-child(4) > td.r9 > table > tbody > tr:nth-child(1) > td:nth-child(1) > div",
  sendConfirm : "span > span.bAq"
};
module.exports = gmailQuery;
