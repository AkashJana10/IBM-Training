const express = require('express');
const path = require('path');
const connectDB = require('./configs/db');
const userRouts = require('./routes/user.route');
const app = express();


app.use(express.urlencoded());
app.use(express.json());

app.get('/',(req,res)=>{
    res.status(200).send('Welcome to baclend');
});

app.get('/register',async(req,res)=>{
    console.log(req.method,req.url);
    res.status(200).sendFile(path.join(__dirname,'../','frontend','views','login.html'));
});
app.use(userRouts);

app.listen(3000,async()=>{
    try {
        await connectDB;
        console.log("DB is connected");
        console.log(`Tne server is running on:- http://localhost:3000`); 
    } catch (error) {
        console.log(error);
    }
});