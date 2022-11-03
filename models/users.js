const mongoose = require('mongoose')

const schema = mongoose.Schema;
const usersSchema = new schema({
    username: {type: String},
    updateTime : {type : Date}
})

module.exports = mongoose.model('users', usersSchema)