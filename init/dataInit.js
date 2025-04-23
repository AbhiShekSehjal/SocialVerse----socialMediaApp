const mongoose = require("mongoose");
const Post = require("../Models/posts")
const initdata = require("./data");

main().then((res) => {
    console.log("Database Connect successfully");
}).catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/SoicalVerse');
}

async function addData() {
    await Post.deleteMany({});
    const insertedData = await Post.insertMany(initdata.data);
    console.log(insertedData);
}

addData();