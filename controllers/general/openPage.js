const facebookScraper = require("../../scraper/facebook/general");
const gmailScaper = require("../../scraper/gmail/general");
const users = require("../../models/users");
const cookies = require("../../models/cookies");

const getCookieByUsernameAndPlatform = async (username, platform) => {
  const cookie = await cookies
    .find({
      domain: platform,
    })
    .populate({
      path: "belongTo",
      match: {
        username: username,
      },
    })
    .then((objList) => {
      objList = objList.filter((obj) => obj.belongTo);
      return objList[0]?.cookie;
    });
  return cookie;
};

const openPage = async (req, res) => {
  const { platform, username } = req.body;
  const cookie = await getCookieByUsernameAndPlatform(username, platform);
  if (!cookie)
    return res.status(404).send("username or platform is not correct");
  var err;
  switch (platform) {
    case "facebook":
      err = await facebookScraper.actions.open(cookie);
      break;
    case "gmail":
      err = await gmailScaper.actions.open(cookie);
      break;
    default:
      res.status(404).send("invalid platform");
      break;
  }
  if (!err) res.status(404).send("something went wrong while open browser");
  else res.status(200).send("succeed");
};

module.exports = openPage;
