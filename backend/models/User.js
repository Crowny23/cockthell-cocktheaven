const mongoose = require('mongoose')
const { Schema } = mongoose

let UserSchema = new Schema({
    pseudo: {
        type: String
    },
    phone: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
}, {
    collection: 'users'
}, {
    versionKey: '_somethingElse'
})

module.exports = mongoose.model('User', UserSchema)
