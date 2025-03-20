const express = require('express');
const path = require('path');

const bcrypt = require("bcryptjs");
const User = require("../models/user.model.js");

const registerRouter = express.Router();

registerRouter.use(express.json()); 
registerRouter.use(express.static(path.join(__dirname,'../../frontend/')));

registerRouter.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../../frontend/views/register.html'));
});

registerRouter.post("/", async (req, res,next) => {
  const { name, email, password } = req.body;
  console.log(name, email, password);

  if (!name || !email || !password)
    return res.status(400).json({ message: "All fields are required" });

  const existingUser = await User.findOne({ email });
  if (existingUser)
    return res.status(400).json({ message: "User already exists" });

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ username: name, email, password: hashedPassword });

  await User(user).save();
  res.status(201).json({ message: "User registered successfully" });

  next();

});


module.exports = registerRouter;