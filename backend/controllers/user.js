const User = require("../models/users");
const bcrypt = require("bcrypt");

const { setUser, getUser } = require("../service/auth");

async function handleUserSignUp(req, res) {
  try {
    const { firstName, lastName, email, password } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.json({ message: "Email already exists" });
    }

    const user = await User.create({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    });

    res 
      .status(201)
      .json({ message: "User registered successfully", success: true });
  } catch (error) {
    res.status(404).json({ message: "Something went wrong!", error: error });
  }
}

async function handleUserSignIn(req, res) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({ message: "All fields are required", success: false });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({
        message: "Incorrect password or email",
        success: false,
      });
    }
    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.json({
        message: "Incorrect password or email",
        success: false,
      });
    }

    const token = setUser(user);
    res.status(201).json({
      message: "User logged in successfully",
      success: true,
      token,
    });
  } catch (error) {
    res.status(404).json({ message: "Something went wrong!", error: error });
  }
}

async function handleUserVerification(req, res) {
  try {
    if (!req.user)
      return res.status(404).json({ message: "User not found!", success: false });

    const user = await User.findById(req.user._id);
    const { _id, firstName, lastName, bio, followings, followers } = user;
    const userInfo = { _id, firstName, lastName, bio, followers };

    return res.status(200).json({ message: "Success", success: true, userInfo });
  } catch (error) {
    res.status(404).json({ message: "Something went wrong!", error: error });
  }
}

async function handleAddRemoveFriends(req, res) {
  try {
    const { userId, friendId } = req.body;
    const user = await User.findById(userId);
    const friend = await User.findById(friendId);

    if (user.followings.includes(friendId)) {
      user.followings = user.followings.filter((id) => id != friendId);
      friend.followers = friend.followers.filter((id) => id != userId);
    } else {
      user.followings.push(friendId);
      friend.followers.push(userId);
    }
    
    await User.findByIdAndUpdate(userId, {$set : {followings: user.followings}})
    await User.findByIdAndUpdate(friendId, {$set: {followers: friend.followers}})

    const following = await Promise.all(
      user.followings.map(async (item) => {
        const user = await User.findById(item);
        const { _id, firstName, lastName } = user;
        return { _id, firstName, lastName };
      })
    );

    res.status(200).json({ friendList: following });
  } catch (error) {
    res.status(404).json({ message: "Something went wrong!", error: error });
  }
}

async function handleAllGetFriends(req, res) {
  try {
    const userId = req.params.userId;

    const { followings } = await User.findById(userId);
    const following = await Promise.all(
      followings.map(async (item) => {
        const user = await User.findById(item);
        const { _id, firstName, lastName } = user;
        return { _id, firstName, lastName };
      })
    );

    res.status(200).json({ friendList: following });
  } catch (error) {
    res.status(404).json({ message: "Something went wrong!", error: error });
  }
}
module.exports = {
  handleUserSignUp,
  handleUserSignIn,
  handleUserVerification,
  handleAddRemoveFriends,
  handleAllGetFriends,
};
