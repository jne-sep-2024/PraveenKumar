console.log("Hello Jhon");

const express= require('express')
const mongoose=require('mongoose')
const app= express();



app.get('/', (req, res)=>{
    res.send('Getting data from API')
})

mongoose.connect('mongodb:localhost:3000/books',{
    useNewUrlParser: true,  
    useUnifiedTopology: true 
}).then(()=>{
    console.log("Connected")
}).catch(()=>{
    console.log("Not Connected")
})

const port = process.env.PORT || 4001;  
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


const http= require('http')
const sever=http.createServer((req,res)=>{
    console.log(req);
})
sever.listen(3050);