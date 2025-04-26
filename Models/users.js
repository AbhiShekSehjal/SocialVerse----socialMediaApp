// const mongoose = require("mongoose");
// const { Schema } = mongoose;
// const Post = require("./posts");

// const userSchema = new Schema({
//     userName: {
//         type: String
//     },
//     profilePic: {
//         type: String,
//         default: "https://media.greatbigphotographyworld.com/wp-content/uploads/2022/04/young-woman.jpg"
//     },
//     bio: {
//         type: String
//     },
//     followers:
//         [
//             {
//                 type: Schema.Types.ObjectId,
//                 ref: 'User'
//             }
//         ],
//     following:
//         [
//             {
//                 type: Schema.Types.ObjectId,
//                 ref: 'User'
//             }
//         ],
//     posts: [
//         {
//             type: Schema.Types.OjectId,
//             ref: Post
//         }
//     ]
// })

// const User = mongoose.model("User", userSchema);

// module.exports = User;