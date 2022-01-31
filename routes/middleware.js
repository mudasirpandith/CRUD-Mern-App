const jwt = require("jsonwebtoken");
const UserLogin = require("../model/lo");
const User = require("../model/user");

const authenticate = async (req, res, next) => {
  try {
    var token = req.cookies.Leaders;
    const verifyToken = jwt.verify(token, "kejddhbejhydbegyuhv");
    const userFound = await UserLogin.findOne({
      _id: verifyToken._id,
      "tokens.token": token,
    });
    if (!userFound) {
      throw new Error("User Not Found");
    } else {
      const userData = await User.find();
      req.userData = userData;
    }
  } catch (err) {
    console.log(err);
  }
  next();
};

module.exports = authenticate;
