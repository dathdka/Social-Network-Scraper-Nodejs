const browserInstance = require('../browser')

const scrapObj = async () =>{
    const browser = await browserInstance();
    const page = (await browser.pages())[0];
    await page.goto('https://www.google.com')
}
module.exports = scrapObj