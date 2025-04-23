const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    userName: {
        type: String
    },
    fullName: {
        type: String
    },
    profilePic: {
        type: String
    },
    bio: {
        type: String
    },
    followers: {
        type: Number
    },
    following: {
        type: Number
    },
})

const User = mongoose.model("User", userSchema);

module.exports = User;