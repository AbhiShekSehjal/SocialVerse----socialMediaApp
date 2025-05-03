const mongoose = require("mongoose");
const { Schema } = mongoose;

const postSchema = new Schema({

    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },

    image: {
        type: String,
        default: "https://images.unsplash.com/photo-1652100116406-b665bdcd688c?q=80&w=1974&auto=format&fit=crop"
    },
    caption: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        default: 12
    },
    comments: [
        {
            type: String
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    },
});

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
