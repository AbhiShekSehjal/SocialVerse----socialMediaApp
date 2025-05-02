const express = require("express");
const posts = require("./Models/posts");
const User = require("./Models/users");
const Comments = require("./Models/comments");
const mongoose = require("mongoose");
const methodOverride = require('method-override');
const engine = require("ejs-mate");
const path = require("path");

const app = express();
const port = 8080;

app.engine("ejs", engine);

app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/Views"));

main().then((res) => {
    console.log("Database Connect successfully");
}).catch(err => console.log(err));


async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/SoicalVerse');
};

//Home route
app.get("/", async (req, res) => {
    try {
        const allPosts = await posts.find().populate("comments");
        // console.log(allPosts);

        res.render("./posts/home.ejs", { posts: allPosts })
    } catch (error) {
        res.status(500).send("Error from fatching posts");
    }
})

//Show route (post)
app.get("/show/:id", async (req, res) => {
    try {
        let { id } = req.params;
        const showPost = await posts.findById(id);
        // console.log(showPost);

        // if (!showPost) {
        //     req.flash("error", "Post you reqested for does not exist!");
        //     return res.redirect("/");
        // }

        res.render("./posts/show.ejs", { showPost: showPost });

    } catch (error) {
        res.status(500).send("Error from show post");
    }
})

//edit route (post)
app.get("/edit/:id", async (req, res) => {
    try {
        let { id } = req.params;
        let post = await posts.findById(id);
        // console.log(post);

        res.render("./posts/edit.ejs", { post: post })
    } catch (error) {
        res.status(500).send("Error from edit post");
    }
})

//update route (post)
app.put("/show/:id", async (req, res) => {
    try {
        let { id } = req.params;
        let { userName, image, caption } = req.body;

        let updatedPost = await posts.findByIdAndUpdate(id, { userName, image, caption }, { runValidators: true })
        // console.log(updatedPost);

        res.redirect("/");
    } catch (error) {
        res.status(500).send("Error from update post");
    }
});

//delete route (post)
app.delete("/delete/:id", async (req, res) => {
    try {
        let { id } = req.params;
        let deletedPost = await posts.findByIdAndDelete({ _id: id });
        // console.log(deletedPost);
        res.redirect("/");
    } catch (error) {
        res.status(500).send("Error from delete post");
    }
});

//show route (userProfile)
app.get("/user/:id", async (req, res) => {
    let { id } = req.params;
    let userProfile = await posts.findById(id);
    // console.log(userProfile.user);

    res.render("./user/userProfile.ejs", { userProfile })
})

//create post route
app.post("/", async (req, res) => {

    let { userName, caption, image } = req.body;
    if (!image || image.trim() == "") {
        image = undefined;
    }

    let newPost = new posts({
        user: {
            username: userName,
        },
        caption: caption,
        image: image
    })

    await newPost.save().then(() => {
        console.log("new post added!");
    }).catch((err) => {
        console.log(err);
    })
    res.redirect("/")
})

// createComment route
app.post("/createComment/:id", async (req, res) => {

    let { id } = req.params;
    let { newComments } = req.body;
    let findPost = await posts.findById(id).populate("comments");

    console.log(newComments);

    if (!newComments || newComments.trim() == "") {
        console.log("Empty comment not allowed");

    } else {

        // ...........start from here............

        let result = findPost.comments.push({ text: newComments });
        // console.log(result);
    }

    // res.send("comment page");
    res.redirect("/")
})

// app.use((err, req, res, next) => {
//     console.log("--------error---------");
//     next(err)
// })

app.listen(port, () => {
    console.log("Server is running on port " + port);
})