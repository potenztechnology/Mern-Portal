const mongoose = require('mongoose')
const nameSchme = new mongoose.Schema({
    name: {
        type: String, require: true
    },
    role: {
        type: String, require: true
    }
})

const Name = mongoose.model('Name', nameSchme)
module.exports = { Name }