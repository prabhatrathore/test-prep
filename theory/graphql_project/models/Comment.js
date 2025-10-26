const mongoose = require("mongoose")

const commentSchema = new mongoose.Schema({
    content: String,
    commentableId: { type: mongoose.Schema.Types.ObjectId, required: true },
    commentableType: {
        type: String,
        enum: ['Post', 'Video'],
        required: true
    }
})

module.exports = mongoose.model('Comment', commentSchema)