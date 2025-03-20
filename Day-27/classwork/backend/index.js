const express = require('express'); 
const {connectDB} = require('./configs/db'); 
const productRegister = require('./routes/productRegister.router'); 
const productRouter = require('./routes/product.router');
const registerRouter = require('./routes/register.router');
const loginRouter = require('./routes/login.router');
require('dotenv').config();

const app = express(); 
app.use(express.json()); 

app.use((req, res, next) => {
     res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500'); // Allow requests from your client's origin
     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Allow specified HTTP methods
     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Allow specified headers
     next();
});

app.use(registerRouter);
app.use('/register',loginRouter);
app.use('/register/login', productRegister); 
app.use('/register/login/get',productRouter);
app.listen(process.env.PORT, "0.0.0.0", async() => {
     try { 
          await connectDB;
          console.log("DB is connected"); 
          console.log(`Server is running at:- http://localhost:${process.env.PORT}`); 
          // console.log(`Server running on http://0.0.0.0:${process.env.PORT}`);
     } catch (error) { 
          console.log(error.message); 
     } 
 });