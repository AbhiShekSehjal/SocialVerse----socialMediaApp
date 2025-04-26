const mongoose = require("mongoose");
const { Schema } = mongoose;
const Comment = require("./comments")

const postSchema = new Schema({
    image: {
        type: String,
        default: "https://media.greatbigphotographyworld.com/wp-content/uploads/2022/04/young-woman.jpg"
    },
    caption: {
        type: String,
        required: true,
    },
    likes: {
        type: Number,
        default: 0
    },


    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: "Comment"
        }
    ],


    user: {
        username: {
            type: String,
            required: true,
        },
        profilePic: {
            type: String,
            default: "https://media.greatbigphotographyworld.com/wp-content/uploads/2022/04/young-woman.jpg"
        },
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },


    // user: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'User',
    //     required: true
    // },

    // likes:
    //     [
    //         {
    //             type: Schema.Types.ObjectId,
    //             ref: 'User'
    //         }
    //     ],
    // comments: [
    //     {
    //         user: { type: Schema.Types.ObjectId, ref: 'User' },
    //         text: { type: String, required: true },
    //         createdAt: { type: Date, default: Date.now }
    //     }
    // ],




    // userProfilePic: {
    //     type: Schema.Types.ObjectId,
    //     ref: User,
    // }
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;