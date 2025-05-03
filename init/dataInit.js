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

    initdata.postsData = initdata.postsData.map((obj) => ({ ...obj, user: "68164745034e27a35070829a" }))

    const insertedPosts = await POST.insertMany(initdata.postsData);

    console.log("Posts--------------", insertedPosts);

    mongoose.connection.close();
}

addPosts();