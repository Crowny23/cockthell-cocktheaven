const mongoose = require('mongoose')
const { Schema } = mongoose

let CommentSchema = new Schema({
    idUser: {
        type: String
    },
    pseudo: {
        type: String
    },
    date: {
        type: String
    },
    text: {
        type: String
    },
    idDrink: {
        type: Number
    }
}, {
    collection: 'comments'
}, {
    versionKey: '_somethingElse'
})

module.exports = mongoose.model('Comment', CommentSchema)