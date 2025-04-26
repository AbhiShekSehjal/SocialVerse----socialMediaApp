// const mongoose = require("mongoose");
// const posts = require("../Models/posts");

// module.exports.allPosts = async (req, res) => {
//     try {
//         const allPosts = await posts.find();
//         res.render("./posts/home.ejs", { posts: allPosts })
//     } catch (error) {
//         res.status(500).send("Error fatching posts");
//     }
// }

// module.exports.showPost = async (req, res) => {
//     try {
//         let { id } = req.params;
//         const showPost = await posts.findById(id)
//         res.render("show", { showPost: showPost });
//     } catch (error) {
//         res.status(500).send("Error show post");
//     }
// }

// module.exports.editPost = async (req, res) => {
//     try {
//         let { id } = req.params;
//         let post = await posts.findById(id);
//         res.render("edit", { post: post })
//     } catch (error) {
//         res.status(500).send("Error edit post");
//     }
// }