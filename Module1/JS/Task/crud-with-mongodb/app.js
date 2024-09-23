const express = require("express");
const mongoose = require("mongoose"); 
const app = express();
mongoose.connect( "mongodb://localhost:27017/bookstore")

const bookstores = new mangoose.Schema({
  title: String,
  author: String,
  pages: Number,
  rating: Number});

  const bookmodel= mangoose.model(bookstore,bookstores)

app.get("/getbooks",(req, res)=>{
  bookmodel.find({}).then(function(books){
    res.json(books)
  }).catch(function(err){
    console.log(err);
  })
})
app.listen(3001, () => {
  console.log("Server is running on port 3001");
})
  