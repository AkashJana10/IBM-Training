const express = require('express');
const userRouter = require('./routes/user.routes');
const app = express();
app.use(express.json());
app.get('/',(req,res)=>{
    res.status(200).send(`<h1 style="color:red;"> Wellcome to our backend ...!! </h1>`);
});

app.use(userRouter);

const PORT = 3001;
app.listen(PORT,()=>{
    console.log(`app is running on :- http://localhost:${PORT}`); 
});