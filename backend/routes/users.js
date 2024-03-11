const express = require("express");

const {
  handleUserSignUp,
  handleUserSignIn,
  handleUserVerification,
  handleAddRemoveFriends,
  handleAllGetFriends,
} = require("../controllers/user");

const router = express.Router();

router.post("/signup", handleUserSignUp);
router.post("/login", handleUserSignIn);
router.get("/verifyUser", handleUserVerification);
router.post("/addRemoveFriend", handleAddRemoveFriends);
router.get("/getAllFriends/:userId", handleAllGetFriends);

module.exports = router;
