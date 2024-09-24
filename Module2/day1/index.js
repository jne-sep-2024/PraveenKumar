// console.log("Hello Jhon");

const express= require('express')
const mongoose=require('mongoose')
const app= express();

app.get('/books',(req, res)=>{
const books= [
    {id:1, title : "Harry Potter", author: "John Doe"},
    { id:2, title : "Teacher", author: "Smith" } ];
    res.status(200).json(books);
});

app.listen(3000,()=>{
    console.log("Connected to the port 3000")
})