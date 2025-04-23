const express = require("express");
const router = express.Router();
const allPostController = require("../controllers/postsController")

router.get("/", allPostController.allPosts);

router.get("/:id", allPostController.showPost);

router.get("/:id", allPostController.editPost)

module.exports = router;