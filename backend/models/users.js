const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String, 
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      default: "",
    },
    followers: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
    },
    followings: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 12);
});

const USER = mongoose.model("user", userSchema);

module.exports = USER;
