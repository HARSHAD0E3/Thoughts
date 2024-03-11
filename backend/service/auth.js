const jwt = require("jsonwebtoken");

require("dotenv").config();
const { SECRET_KEY } = process.env;

function setUser(user) {
  return jwt.sign(
    {
      _id: user._id,
      userName: `${user.firstName} ${user.lastName}`,
      email: user.email,
    },
    SECRET_KEY,
    {
      expiresIn: 60 * 60,
    }
  );
} 

function getUser(token) {
  if (!token) return null;
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (error) {
    return null;
  }
}

module.exports = {
  setUser,
  getUser,
};
