const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.status(200).send("Wellcome to backend");
});
const data = [
    {name:"Akash",age:21},
    {name:"Sabuj",age:30}
]
app.get('/data',(req,res)=>{
    if(!data){
        res.status(400).send("Data not found");
    }
    else{
        res.status(200).send(data);
    }
});
app.use(express.json());

app.post('/login',(req,res)=>{
    try {
        if(req.body.email === "akashjana9679@gmail.com"){
            res.status(200).send({message:'Login successful'});
        }
        else{
            res.status(400).send({message:'Invalid Email'});
        }  
    } catch (error) {
        console.log(error);
    }
});
const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`The server is running on:- http://localhost:${PORT}`);
});
