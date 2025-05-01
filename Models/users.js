const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        // unique: true,
        default: "Raju"
    },
    profilePic: {
        type: String,
        default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp-VJxaFIy3CEl9egxp5FJ1Qgk5jrPM03s4A&s"
    }
})

const User = mongoose.model("User", userSchema);

module.exports = User;