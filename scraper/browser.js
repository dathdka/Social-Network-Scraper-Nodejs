const puppeteer = require("puppeteer");

const startBrowser = async () => {
  let browser;
  browser = await puppeteer.launch({
    headless: false,
    ignoreDefaultArgs: true,
    ignoreDefaultArgs: ["--disable-extensions"],
    args: [
      "--no-sandbox",
      "--use-gl=egl",
      "--disable-setuid-sandbox",
      "--start-maximized",
    ],
    defaultViewport: null,
  });
  return browser;
};

module.exports = startBrowser;
