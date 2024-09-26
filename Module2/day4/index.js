const express=require('express')
const path = require('path');
const fs=require('fs');
const bodyParser=require('body-parser')
const app=express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, './public/index')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.use(bodyParser.urlencoded({extended: false}));

app.post('/addbook',(req, res, next)=>{
    const { bookname, auth, Bookdesc } = req.body;
        let books=[];
    const newBook = {
        bookname : req.body.bookname,
        Bookdesc : req.body.Bookdesc,
        auth : req.body.auth
      }
      books.push(newBook)
      fs.writeFile('books.json', JSON.stringify(books), (err) => {
        if (err) throw err;
        console.log("Book saved successfully:", newBook);
        console.log("Submitted Book:");
        res.redirect('/');
      });    
      
    // fs.readFile('book.json', 'Utf8', (err,data)=>{
    //     let books=[];
    //     if(!err && data){
    //         books = JSON.parse(data);
    //     }    books.push(newBook);res.redirect('/');    
         
    // })
})
   
    // ,{ bookname, auth, Bookdesc });
app.listen(PORT, () => {
    console.log(`Server is running oddbookn http://localhost:${PORT}`);
});

