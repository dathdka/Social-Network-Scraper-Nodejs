const puppeteer = require('puppeteer')

const startBrowser = async () =>{
    let browser ;
    browser = await puppeteer.launch({
        headless : false,
        ignoreDefaultArgs : true,
        defaultViewport : false
    })
    return browser
}

module.exports = startBrowser