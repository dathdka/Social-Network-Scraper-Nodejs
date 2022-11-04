const browserInstance = require('../../browser')

const scrapObj = async (cookie) =>{
    try {
        const browser = await browserInstance();
        const page = (await browser.pages())[0];
        let url = 'https://www.facebook.com'
        console.log(`navigating to ${url}`)
        await page.goto(url)
        await page.setCookie(...cookie)
        await page.goto(url)
        return true
    } catch (error) {
        console.log('something went wrong')
        return false
    }
}
module.exports = scrapObj