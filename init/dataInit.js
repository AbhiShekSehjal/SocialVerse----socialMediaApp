const mongoose = require("mongoose");
const POST = require("../Models/posts");
const USER = require("../Models/users")
const initdata = require("./data");

main().then((res) => {
    console.log("Database Connect successfully");
}).catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/SoicalVerse');
}

async function addPosts() {
    await POST.deleteMany({});
    const insertedPosts = await POST.insertMany(initdata.data);
    console.log(insertedPosts);
    mongoose.connection.close();
}

// async function addUser() {
//     await USER.deleteMany({});
//     const insertedUsers = await USER.insertMany(initdata.user);
//     console.log(insertedUsers);
//     mongoose.connection.close();
// }

// addUser();

addPosts();