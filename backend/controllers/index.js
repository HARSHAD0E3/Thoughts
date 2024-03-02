const Posts = require("../models/posts");

async function handleGetAllPosts(req, res) {
  const posts = await Posts.find();
  res.setHeader("X-created-By", "Thoughts");
  res.status(200).json({ posts });
}

async function handleAddNewPost(req, res) {
  const body = req.body;
  if (!body) return res.status(400).json({ msg: "Valid data required." });
  await Posts.create({
    title: body.title,
    body: body.body,
    userId: body.userId,
    tags: body.tags,
    reactions: body.reactions,
  });
  res.json({ msg: "Success" });
}

async function handleGetPostById(req, res) {
  const userId = req.params.userId;
  const result = await Posts.findOne({ userId: userId });

  if (!result) return res.status(400).json({ msg: "Enter valid userId" });
  res.json(result);
}

module.exports = {
  handleGetAllPosts,
  handleAddNewPost,
  handleGetPostById,
};
