const mongoose = require("mongoose");

const postsSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      require: true,
    },
    title: {
      type: String,
      require: true,
    },
    body: {
      type: String,
      require: true,
    },
    userId: {
      type: String,
      require: true,
    },
    tags: {
      type: [String],
    },
    reactions: {
      type: Number,
      require: true,
    },
  },
  { timestamps: true }
);

const Posts = mongoose.model("post", postsSchema);

module.exports = Posts;
