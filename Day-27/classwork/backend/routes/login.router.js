const express = require('express');
const path = require('path');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model.js");

const loginRouter = express.Router();

loginRouter.use(express.json()); 
loginRouter.use(express.static(path.join(__dirname,'../../frontend/')));

loginRouter.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,'../../frontend/views/login.html'));
});

loginRouter.post("/login", async (req, res) => {
    const { email, password } = req.body;
  
    const user = await User.findOne({ email });
    if (!user) 
      return res.status(400).json({ message: "Invalid credentials" });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) 
      return res.status(400).json({ message: "Invalid credentials" });
  
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ token });
});

module.exports = loginRouter;