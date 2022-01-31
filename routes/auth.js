const express = require("express");
const { ObjectId } = require("mongodb");
const { findOne } = require("../model/user");
require("../db/conn");
const User = require("../model/user");
const UserLogin = require("../model/lo");
const jwt = require("jsonwebtoken");
const router = express.Router();
const authenticate = require("./middleware");
//---------  this wil give list of record--------
//----------------------------------------------
router.post("/userlogin", async (req, res) => {
  var token;
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({ message: "Incomplete Credentails" });
  } else {
    const foundUser = await UserLogin.findOne({ email });
    if (foundUser) {
      token = await foundUser.generateAuthToken();
      res.cookie("Leaders", token, {
        expires: new Date(Date.now() + 5 * 60 * 1000),
        httpOnly: true,
      });

      res.status(200).json({ message: "user loged in" });
    } else {
      res.status(400).json({ message: "user doesnt exit" });
    }
  }
});
router.get("/record", authenticate, async (req, res) => {
  res.status(200).json(req.userData);
});

//---------  this wil give single record--------
//----------------------------------------------
router.get("/record/:id", async (req, res) => {
  const id = req.params.id;
  const response = await User.findOne({ _id: ObjectId(req.params.id) });
  if (!response) {
    res.json("No User in record");
  } else {
    res.json(response);
  }
});

//---------  this wil create a new  record--------
//----------------------------------------------

router.post("/record/add", async (req, res) => {
  const { username, phoneNumber, email, address } = req.body;
  if (!username || !phoneNumber || !email || !address) {
    res.status(400).json("Fill All Columns");
  } else {
    const user = new User({
      username,
      phoneNumber,
      email,
      address,
    });
    const UserSaved = await user.save();
    if (!UserSaved) {
      res.status(400).json({ error: "Error in Saving Record" });
    } else {
      console.log("added");
      res.status(200).json({ error: "New Record Added" });
    }
  }
});

//---------  this wil update new  record--------
//----------------------------------------------

router.post("/update/:id", async (req, res) => {
  const { name, position, level } = req.body;
  User.findOne({ _id: ObjectId(req.params.id) }, function (err, user) {
    (user.name = name), (user.position = position), (user.level = level);

    user.save();

    res.json("Record Updated");
  });
});

//---------  this wil Delete new  record--------
//----------------------------------------------
router.post("/:id", async (req, res) => {
  const UserFound = await User.findOneAndDelete({
    _id: ObjectId(req.params.id),
  });
  if (!UserFound) {
    res.status(400).json("Error");
  } else {
    res.status(201).json("Record Deleted");
  }
});

module.exports = router;
