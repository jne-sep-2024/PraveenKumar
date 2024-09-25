const express = require('express');
const path=require('path')
const router=express.Router();

router.use('/gotdata',(req,res,next)=>{
    res.sendFile(path.join(__dirname, '../', 'code', 'index1.html'));
    const array=require('./data')
    console.log(array);
})

module.exports= router;