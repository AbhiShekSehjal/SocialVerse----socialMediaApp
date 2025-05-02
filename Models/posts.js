const mongoose = require("mongoose");
const { schema } = require("./users");
const { Schema } = mongoose;

const postSchema = new Schema({
    image: {
        type: String,
        default: "https://images.unsplash.com/photo-1652100116406-b665bdcd688c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    caption: {
        type: String,
        required: true,
    },
    likes: {
        type: Number,
        default: 123
    },

    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: "Comment"

        }
    ],

    user: {
        username: String,
        profilePic: {
            type: String,
            default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp-VJxaFIy3CEl9egxp5FJ1Qgk5jrPM03s4A&s"
        },
        bio: String,
        followers: Number,
        following: Number,
        userAllPost: [
            {
                image: String,
                caption: String,
                likes: Number,
            }
        ]
    },

    // comments: [
    //     {
    //         type: Schema.Types.ObjectId,
    //         ref: "Comment"
    //     }
    // ],


    // user: {
    //     type: Schema.Types.ObjectId,
    //     ref: "User",
    //     required: true
    // },

    createdAt: {
        type: Date,
        default: Date.now()
    },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;