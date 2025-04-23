const mongoose = require("mongoose");
const posts = require("../Models/posts");

module.exports.allPosts = async (req, res) => {
    try {
        const allPosts = await posts.find();
        res.render("./posts/home.ejs", { posts: allPosts })
    } catch (error) {
        res.status(500).send("Error fatching posts");
    }
}

module.exports.showPost = async (req, res) => {
    try {
        let { id } = req.params;
        let showPost = await posts.findById(id)
        res.render("./posts/show.ejs", { showPost });
    } catch (error) {
        res.status(500).send("Error show post");
    }
}

module.exports.editPost = async (req, res) => {
    try {
        let { id } = req.params;
        let post = await posts.findById(id);
        res.render("./posts/edit.ejs", { post })
    } catch (error) {
        res.status(500).send("Error edit post");
    }
}