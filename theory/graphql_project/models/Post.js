const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    title: String,
    content: { type: String },
})

module.exports = mongoose.model('Post', postSchema)