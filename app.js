const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const engine = require("ejs-mate");
const app = express();
const port = 8080;

main().then((res) => {
    console.log("Database Connect successfully");
}).catch(err => console.log(err));


async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/SoicalVerse');
}

const allPostsRouter = require("./Routes/postsRoutes");
const showPostRouter = require("./Routes/postsRoutes");
const editPostRouter = require("./Routes/postsRoutes");

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/Views"));

app.engine("ejs", engine)

app.use("/home", allPostsRouter);
app.use("/show", showPostRouter);
app.use("/edit", editPostRouter);

app.listen(port, () => {
    console.log("Server is running on port " + port);
})