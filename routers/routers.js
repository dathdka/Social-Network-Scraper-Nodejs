const express = require('express')
const router = express.Router()
const joi = require('joi')
const auth = require('../middleware/auth')
const validator = require('express-joi-validation').createValidator({})
const generalControllers = require('../controllers/general/controllers')

const joiSchema = joi.object({
    token : joi.string().min(6).max(10).required(),
    platform : joi.string().min(2).max(20).required(),
    username : joi.string().min(6).max(30).required()
})

router.post('/open',validator.body(joiSchema), auth, generalControllers.controllers.openPage)
router.post('/store-data',generalControllers.controllers.storeData)

module.exports = router