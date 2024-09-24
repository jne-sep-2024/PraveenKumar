// // const { strict } = require('assert');
// const express= require('express')
// const mongoose=require('mongoose')
// const dotenv=require('dotenv')
// const app= express();
// dotenv.config();

// app.use(express.json());
// const PORT =process.env.PORT || 7000;
// const mgurl=process.env.MDURL;

// app.listen(PORT, () => {
//   console.log('Server running on port 3120');
// });

// mongoose.connect(mgurl,{
//   useNewUrlParser: true, 
//   useUnifiedTopology: true 
// }).then(()=>{
//     console.log("Connected")
// }).catch(()=>{
//     console.log("Not Connected")
// })

// const bookSchema= new mongoose.Schema({
//   title : String,
//   author : String,
//   pages : Number,
//   rating : Number
// });

// const bookModel= mongoose.model("books", bookSchema);

// app.get('/getbooks', async (req, res)=>{
//   try{
//      const books= await bookModel.find();
//      res.status(200).json(books);
//   }catch (error) {
//     console.error('Error fetching books:', error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// });


// Import necessary packages
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
dotenv.config();

// Middleware
app.use(express.json());

// Set up the server port and MongoDB URL from the environment variables
const PORT = process.env.PORT || 7000;
const mgurl = process.env.MDURL;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Connect to MongoDB
mongoose.connect(mgurl, {
}).then(() => {
  console.log("Connected to MongoDB");
}).catch((err) => {
  console.error("Failed to connect to MongoDB", err);
});

// Define the book schema
const bookSchema = new mongoose.Schema({
  name: String,
  age: Number
});

// Register the model with Mongoose
const bookModel = mongoose.model("books", bookSchema);

// Route to get all books from the MongoDB database
app.get('/books', async (req, res) => {
    const books = await bookModel.find();
    console.log(books);
    // res.json(books);
  }); 
