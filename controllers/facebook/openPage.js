const facebookScraper = require('../../scraper/facebook/scraper')

const openPage = async (req,res) =>{
    const {platform} = req.body
    let pageToOpen = ''
    switch(platform){
        case 'facebook':
            await facebookScraper()
            break;
        case 'gmail':
            pageToOpen = 'https://www.gmail.com'
            break;
        default:
            res.status(404).send('invalid platform')
            break;
    }

}

module.exports = openPage