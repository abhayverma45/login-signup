const { Router } = require("express");
const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
router.get("/", (req, res) => {
  res.send(`hello from the router`);
});

router.post("/register", async (req, res) => {
  const { name, email, phone, password, confirmpassword } = req.body;
  if (!name || !email || !phone || !password || !confirmpassword) {
    return res.status(422).json({ error: "please fill all the fields" });
  }
  try {
    const userExit = await User.findOne({ email: email });
    if (userExit) {
      return res.status(422).json({ error: "email already exit" });
    } else if (password != confirmpassword) {
      return res.status(422).json({ error: "password not matching" });
    } else {
      const user = new User({ name, email, phone, password, confirmpassword });
      await user.save();

      res.status(201).json({ message: "user registered successfully" });
    }
  } catch (error) {
    console.log(error);
  }
});

// login api

router.post("/signin", async (req, res) => {
  try {
    let token;

    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "please fill the fields" });
    }
    const userlogin = await User.findOne({ email: email });
    // console.log(userlogin);
    if (userlogin) {
      const match = await bcrypt.compare(password, userlogin.password);
      // jwt token
      token = await userlogin.generateAuthToken();
      console.log(token);
      if (!match) {
        res.status(400).json({ error: "error password" });
      } else {
        res.json({ message: "user signin successfully" });
      }
    } else {
      res.status(400).json({ error: "email not matching" });
    }

    // matching login time password and atlas stored password
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
