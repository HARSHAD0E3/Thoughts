const mongoose = require("mongoose");

const postsSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
      max: 500,
    },
    reactions: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Posts = mongoose.model("post", postsSchema);

module.exports = Posts;
