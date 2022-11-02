const jwt = require('jsonwebtoken')
require('dotenv').config()

const auth = async (req,res,next) =>{
    const {token} = req.body
    if(token === process.env.TOKEN)
        return next()
    else
        res.status(401).send('invalid token')
}
module.exports = auth