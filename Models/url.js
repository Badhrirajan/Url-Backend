const mongoose = require('mongoose')
const shortId = require('shortid')

const URLSchema = new mongoose.Schema({
    longurl: {
        type: String,
        required: true
    },
    shorturl: {
        type: String,
        required: true,
        default: shortId.generate()
    },
    count: {
        type: Number,
        required: true,
        default: 0
    }
})

module.exports = mongoose.model('URL',URLSchema)