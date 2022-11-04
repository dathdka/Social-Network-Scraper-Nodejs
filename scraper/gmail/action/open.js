const startBrowser = require('../../browser')

const openPage = async (cookie) =>{
    try {
        let browser = await startBrowser();
        const page = (await browser.pages())[0]
        const url = 'https://mail.google.com/mail/u/0'
        console.log(`navigation to url: ${url}`)
        await page.goto(url)
        await page.setCookie(cookie)
        await page.goto(url)
        return true
    } catch (error) {
        console.log('something went wrong')
        return false
    }
}

module.exports = openPage