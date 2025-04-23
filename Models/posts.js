const mongoose = require("mongoose");
const data = require("../init/data");
const { Schema } = mongoose;

const postSchema = new Schema({
    image: {
        type: String,
        default: "https://media.greatbigphotographyworld.com/wp-content/uploads/2022/04/young-woman.jpg"
    },
    caption: {
        type: String
    },
    likes: {
        type: Number
    },
    comments: [
        {
            userId: Number,
            text: String
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;