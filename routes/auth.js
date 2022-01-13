const express = require("express");
const { ObjectId } = require("mongodb");
const { findOne } = require("../model/user");
require("../db/conn");
const User = require("../model/user");
const router = express.Router();
//---------  this wil give list of record--------
//----------------------------------------------
router.get("/record", async (req, res) => {
  const response = await User.find({});
  if (!response) {
    res.json("No User in record");
  } else {
    res.json(response);
  }
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
  const { name, position, level } = req.body;
  if (!name || !position || !level) {
    res.status(400).json("Fill All Columns");
  } else {
    const user = new User({
      name,
      position,
      level,
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
