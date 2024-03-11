const express = require("express");

const { handleGetAllPosts, handleAddNewPost, handleGetPostById } = require("../controllers/index");
const router = express.Router();

router.route("/").get(handleGetAllPosts)
router.post("/createPost", handleAddNewPost);

router.get("/:userId", handleGetPostById);

module.exports = router;
 