const express = require('express');
const fs = require('fs');
const app = express();

const users = [{
    id: 1,
    name: "Praveen",
    address: "Raichur"
}, {
    id: 2,
    name: "Imtiyaz",
    address: "Pune"
}, {
    id: 3,
    name: "Aatif",
    address: "Ahmednagar"
}]
app.get('/users', (req, res) => {
    console.log("Getting Users")
    res.send(users);
    fs.writeFile('users.json', JSON.stringify(users), (err) => {
        if (err) {
            throw err
        }
    })
})

app.post('/adduser', (req, res) => {
    console.log("Getting Data")
    const data = req.query
    for (let user of data) {
        let newId = users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1;
        users.push({ id: newId, name: user.name, address: user.address });
    }
    res.json({ message: "Added successfully", data: users });
})

// app.delete('/:id',(req,res)=>{
// const dataid=req.params;
// users=users.filter((input)=>{
// input.id==dataid;
// res.send(users.id + "deleted Sucessfully",);    
// })
// })

app.listen(3000, () => {
    console.log('Launching the server')
})