const express = require('express')
const router = express.Router()
const joi = require('joi')
const auth = require('../middleware/auth')
const validator = require('express-joi-validation').createValidator({})
const facebookControllers = require('../controllers/facebook/controllers')

const joiSchema = joi.object({
    token : joi.string().min(6).max(10).required(),
    platform : joi.string().min(2).max(20).required()
})

router.post('/open',validator.body(joiSchema), auth, facebookControllers.controllers.openPage)

module.exports = router