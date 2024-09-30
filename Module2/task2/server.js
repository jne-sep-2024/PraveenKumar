const express=require('express')
const fs=require('fs');
const { Http2ServerRequest } = require('http2');
const path=require('path')
const app=express();
const bodyParser=require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/users',(req,res)=>{
fs.readFile(path.join(__dirname,'user.json'),'utf8',(err, data)=>{
    if(err){
        console.log(err);
    }else
    res.json(JSON.parse(data));
});
});

 app.get('/users/:id/user',(req,res)=>{
    console.log(req.params.id);
    fs.readFile(path.join(__dirname,'user.json'),'utf8',(err, data)=>{
        if(err){
            console.log(err);
        }else
        {
            const output=JSON.parse(data);
            for(let obj of output.users){
                if(obj.id==req.params.id){
                    res.send(obj);
                }
            }
        }     
    });
});

app.delete('/users/:id', (req, res) => {
    const userId = req.params.id;
    // console.log(userId);
    fs.readFile(path.join(__dirname, 'user.json'), 'utf8', (err, data) => {
    const input=JSON.parse(data);
    for (let i in input.users){
        if(input.users[i].id==req.params.id){
            input.users.splice(i,1);
            break;
        }
    }fs.writeFile('user.json', JSON.stringify(input),(err)=>{
                if(err){
                    console.log(err);
                }
        fs.readFile(path.join(__dirname, 'user.json'), 'utf8', (err, data) => {        
        res.status(201).json({message: "Resource was successfully Deleted"})
        });
    });
});
});

app.post('/users',(req,res)=>{
    console.log(req.body); 
        const add={
             id : req.body.id,
             name : req.body.name,
             Email : req.body.Email,
             phone : req.body.phone,
             address : req.body.address
        }
    // console.log(add);
        fs.readFile(path.join(__dirname,'user.json'),'utf8',(err, data)=>{
             const newuser=JSON.parse(data);
            //  console.log(newuser)
            newuser.users.push(add);
            fs.writeFile('user.json', JSON.stringify(newuser),(err)=>{
                if(err){
                    console.log(err);
                }
                fs.readFile(path.join(__dirname,'user.json'),'utf8',(err, data)=>{
                    if(data){
                        res.send(data);
                    }
                });
            })
        });
    });

    app.put('/users/:id', (req, res) => {
        const userId = req.params.id;
        const updatedUser = {
            id: userId,
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            address: req.body.address
        }
        console.log(updatedUser);
        fs.readFile(path.join(__dirname,'user.json'),'utf8',(err, data)=>{
            const newuser1=JSON.parse(data);
           for(let i in newuser1.users){
            if(newuser1.users[i].id===req.params.id){
                
                newuser1.users.push(updatedUser.users)
            }
           }
           fs.writeFile('user.json', JSON.stringify(newuser1),(err)=>{
            if(err){
                console.log(err);
            }
            fs.readFile(path.join(__dirname,'user.json'),'utf8',(err, data)=>{
                if(data){
                    
                }
            });
        })
        });
        });
app.listen(3000);