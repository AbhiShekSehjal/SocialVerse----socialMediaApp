const mongoose = require("mongoose");
const { Schema } = mongoose;

const commentSchema = new Schema({
    user: {
        // type: Schema.Types.ObjectId,
        // ref: "User",
        type: String,
        // required: true,
        default: "Raman raghav"
    },
    text: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;