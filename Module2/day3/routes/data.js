const express = require('express');
const path=require('path')
const router=express.Router();

const arr=[];

router.get('/data',(req,res,next)=>{
    res.sendFile(path.join(__dirname, '../', 'code', 'index.html'));
})
router.post('/pdata',(req,res)=>{
    // console.log(req.body);
    arr.push(req.body.title );
    res.redirect('/gotdata');
});

module.exports.router = router;
module.exports.arr=arr;