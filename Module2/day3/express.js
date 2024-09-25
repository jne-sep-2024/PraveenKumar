const express = require('express');
const bodyParser=require('body-parser')
const adminr=require('./routes/data')
const adminb=require('./routes/data1');
const path = require('path');
const app=express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(adminr.router);
app.use(adminb);
app.use((req,res,next)=>{
res.status(404).sendFile(path.join(__dirname, 'code', 'error.html'));
})
app.listen(3002);