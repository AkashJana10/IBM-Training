require('dotenv').config(); 
const express = require('express'); 
const {connectDB} = require('./configs/db'); 
const authRoutes = require('./routes/auth.router'); 
const {protect} = require('./middleware/authMiddleware');

const app = express(); 
app.use(express.json()); 

app.use('/api/auth', authRoutes); 

const PORT = 3000; 
app.listen(PORT, async()=>{ 
   try { 
        await connectDB;
        console.log("DB is connected"); 
        console.log(`Server is running at http://localhost:${PORT}`); 
   } catch (error) { 
        console.log(error.message); 
   } 
});