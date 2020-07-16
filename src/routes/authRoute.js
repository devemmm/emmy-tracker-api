const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const User = mongoose.model("User");

const route = express.Router();

const JWT_SECRETE_KEY = process.env.JWT_SECRETE_KEY;

route.post("/signup", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = new User({
      email,
      password
    });

    await user.save();

    const token = jwt.sign({ userId: user._id }, JWT_SECRETE_KEY);
    res.status(201).send({ token });
  } catch (err) {
    return res.status(422).send(err.message);
  }
});

route.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(422)
      .send({ error: "You must provide email and password" });
  }

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(422).send({ error: "Email not Found !!" });
  }

  try {
    await user.comparePassword(password);
    const token = jwt.sign({ userId: user._id }, JWT_SECRETE_KEY);

    res.send({ token });
  } catch (err) {
    return res.status(422).send({ error: "Invalid Password or Email" });
  }
});

module.exports = route;
