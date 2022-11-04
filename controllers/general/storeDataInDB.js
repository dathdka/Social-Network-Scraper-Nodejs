const users = require("../../models/users");
const cookies = require("../../models/cookies");
const gmailScaper = require("../../scraper/gmail/general");
const urls = require("./urls");

const storeDataInDB = async (req, res) => {
  try {
    const cookieArray = req.body;
    const newUserId = await gmailScaper.actions.getNameAndStoreInDB(
      cookieArray[0]
    );
    console.log(`new cookieId : ${newUserId}`);
    console.log("create user successfuly");
    await cookies.deleteMany({ belongTo: newUserId });
    for (let i = 0; i < cookieArray.length-1; i++) {
      await cookies.create({
        url: urls[i],
        domain: urls[i + 6],
        cookie: cookieArray[i],
        belongTo: newUserId,
      });
    }
    console.log("store cookies successfuly");
    if (newUserId) res.status(200).send("succeed");
    else
      res.status(400).send('can not create new user')
  } catch (error) {
    console.error(error)
    res.status(400).send('something went wrong')
  }
};

module.exports = storeDataInDB
