const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        default: "Raju"
    },
    fullName: {
        type: String
    },
    email: {
        type: String
    },
    profilePic: {
        type: String,
        default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp-VJxaFIy3CEl9egxp5FJ1Qgk5jrPM03s4A&s"
    },
    bio: {
        type: String
    },
    followers: [
        {
            type: String // OR type: Schema.Types.ObjectId if you plan to use references
        }
    ],
    following: [
        {
            type: String
        }
    ]
});

const User = mongoose.model("User", userSchema);
module.exports = User;