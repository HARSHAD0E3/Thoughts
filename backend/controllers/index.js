const Posts = require("../models/posts");
const Users = require("../models/users");

async function handleGetAllPosts(req, res) {
  try {
    const postList = await Posts.find({});
    if (!postList) return res.json({ message: "No posts available!" });
    res.status(200).json({ posts: postList });
  } catch (error) {
    res.status(500).json({ error: error, message: "Something went wrong!" });
  }
}

async function handleUserRelatedPosts(req, res) {
  try {
    let feed = [];
    const currentUser = await Users.findOne({ _id: req.user._id });

    if (!currentUser)
      return res.status(404).json({ message: "User not found" });

    if (currentUser) {
      const userPosts = await Posts.find({ userId: currentUser._id }).sort({
        createdAt: -1,
      });
      userPosts.map((post) => feed.push(post));
    }

    await Promise.all(
      currentUser.followings.map(async (followedId) => {
        let postUser = await Users.find({ _id: followedId });
        let posts = postUser
          ? await Post.find({ userId: followedId }).sort({ createdAt: -1 })
          : {};
        posts.forEach((element) => {
          feed.push(element);
        });
      })
    );
    res.status(200).json(feed.sort((a, b) => b.createdAt - a.createdAt));
  } catch (error) {
    res.status(500).json({ error: error, message: "Something went wrong!" });
  }
}

async function handleAddNewPost(req, res) {
  try {
    const body = req.body;
    if (!body) return res.status(400).json({ message: "Valid data required." });
    await Posts.create({
      userId: req.user._id,
      userName: req.user.userName,
      title: body.title,
      body: body.content,
    });

    res.status(201).json({ msg: "Success" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong!", error: error });
  }
}

async function handleGetPostById(req, res) {
  try {
    const userId = req.params.userId;
    const result = await Posts.findOne({ userId: userId });

    if (!result) return res.status(400).json({ message: "Enter valid userId" });
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong!", error: error });
  }
}

module.exports = {
  handleGetAllPosts,
  handleAddNewPost,
  handleGetPostById,
};
