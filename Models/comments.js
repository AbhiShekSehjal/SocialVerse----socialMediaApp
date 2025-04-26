const mongoose = require("mongoose");
const { Schema } = mongoose;

const commentSchema = Schema({
    user: {
        type: String,
        default: "Rahul charwari singh"
    },
    text: {
        type: String,
        default: "wonderfull"
    },
    // createdAt: {
    //     type: Date,
    //     default: Date.now()
    // }
})

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;