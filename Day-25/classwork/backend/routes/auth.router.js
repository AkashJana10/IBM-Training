const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model.js");
const Products = require('../models/product.model.js');
const path = require('path');
const { protect } = require("../middleware/authMiddleware.js");


const router = express.Router();
router.use(express.json()); 

router.use(express.static(path.join(__dirname,'../../frontend/')));

router.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,'../../frontend/views/login.html'));
});

router.get('/register',(req,res)=>{
    res.sendFile(path.join(__dirname,'../../frontend/views/register.html'));
});

router.get('/products-register',(req,res)=>{
  res.sendFile(path.join(__dirname,'../../frontend/views/createData.html'));
});

router.get('/all-products',async(req,res)=>{
  try {
    const data = await Products.find();
    res.json(data);
  } catch (error) {
    res.status(400).join({message : error.message});
  }
});

router.post("/register", async (req, res) => {
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
});

router.post("/login", async (req, res) => {
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

router.post('/products-register',async (req,res)=>{
  const {name,category,desc,price,image} = req.body;
  console.log(name  ,category  ,desc  ,price  ,image);

  if(!name || !category || !desc || !price || !image)
    return res.status(400).json({message : "All field of the product is required "});

  const prod = new Products({ name, category, desc, price, image});

  await Products(prod).save();
  res.status(200).send({message : "Product added succesfull"});
});

router.post('/all-products',(req,res)=>{

});

module.exports = router;
