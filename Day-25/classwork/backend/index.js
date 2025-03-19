require('dotenv').config(); 
const express = require('express'); 
const {connectDB} = require('./configs/db'); 
const authRoutes = require('./routes/auth.router'); 
const {protect} = require('./middleware/authMiddleware');
require('dotenv').config();

const app = express(); 
app.use(express.json()); 

app.use((req, res, next) => {
     res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500'); // Allow requests from your client's origin
     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Allow specified HTTP methods
     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Allow specified headers
     next();
});

app.get('/',(req,res)=>{
     res.send();
})

app.use('/api/auth', authRoutes); 

app.listen(process.env.PORT, async()=>{ 
   try { 
        await connectDB;
        console.log("DB is connected"); 
        console.log(`Server is running at:- http://localhost:${process.env.PORT}`); 
   } catch (error) { 
        console.log(error.message); 
   } 
});