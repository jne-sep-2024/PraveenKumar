const express= require('express')
const mongoose=require('mongoose')
const app= express();
app.use(express.json()); 

app.post('/books',(req,res)=>{
const addbook=req.body;
console.log('Book received:', addbook);
res.status(200).json(addbook);
});

app.listen(3001,()=>{
    console.log("Connected to the port 3000")
})