const express = require("express");
const User = require("../Schema/user");
const jwt = require("jsonwebtoken");
const authenticate = require("../middleware/middleware");

const Route = express.Router();

require("../db/conn");
require("../Schema/user");

Route.get("/home", authenticate, (req, res) => {
  console.log("accesed");
  res.status(200).json(req.userFound);
});

Route.post("/logout", async (req, res) => {
  const Cleared = await res.clearCookie("Leaders");
  if (Cleared) {
    res.status(200).json("cleared sesion");
  }
});
Route.post("/register", async (req, res) => {
  const { name, email, phoneNumber, password } = req.body;
  let token;
  if (!email || !password || !name || !phoneNumber) {
    res.status(400).json({ message: "Enter All Fields" });
  } else {
    const UserExits = await User.findOne({ email: email });
    if (UserExits) {
      res.status(400).json({ message: "User already Exits" });
    } else {
      const user = new User({ name, email, phoneNumber, password });
      const addedUser = await user.save();
      if (addedUser) {
        res.status(200).json({ message: "User added" });
      } else {
        res.status(400).json({ message: "Error in Registering User" });
      }
    }
  }
});
Route.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({ message: "Enter Both Fields." });
  }
  const userExits = await User.findOne({ email: email });

  if (!userExits) {
    res.status(400).json({ message: "Invalid Email or Password" });
  } else {
    if (userExits.password === password) {
      token = await userExits.generateAuthToken();
      res.cookie("Leaders", token, {
        expires: new Date(Date.now() + 258920000),
        httpOnly: true,
      });

      res.status(200).json({ message: "user found" });
    } else {
      res.status(400).json({ message: "Invalid Email or Password" });
    }
  }
});

module.exports = Route;
