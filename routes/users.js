const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const { User } = require("../models/User");

//register user
router.post("/api/register", async (req, res) => {
  const { email, password, role, designer, maker } = req.body;
  try {
    var user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: "user already exists" });
    }

    user = new User({ email, password, role, designer, maker });
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();
    res.json(user);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("server error");
  }
});

//add links
router.post("/api/addlink", async (req, res) => {
  const { link, id } = req.body;

  try {
    var user = await User.findById(id);

    user.links.push(link);

    await user.save();
  } catch (err) {
    console.log(err.message);
    res.status(500).send("server error");
  }
});

//get total no of users for admin dashboard

router.get("/api/users", async (req, res) => {
  try {
    var user = await User.find();
    res.json(user);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("server error");
  }
});
module.exports = router;
