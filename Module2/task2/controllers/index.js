import user from '../user.json' assert { type: "json" };
import fs from 'fs';

export const getdata = ((req, res) => {
    try {
        res.status(200).json({ information: 'Data Recieved Sucessfully', user: user.users, statusCode: 200 })
    } catch (err) {
        res.status(400).json({ information: err.information, user: null, statusCode: 400 })
    }
});

export const getuser = ((req, res) => {
    try {
        const { id } = req.params;
        const finduser = user.users.find((data) => data.id == id);
        res.status(200).json({ information: 'Data Recieved Sucessfully', user: finduser, statusCode: 200 })
    } catch (err) {
        res.status(400).json({ information: err.information, user: null, statusCode: 400 })
    }
});

export const postdata = ((req, res) => {
    try {
        const databody = req.body;
        const newUserdata = {
            id: Math.random(),
            ...databody
        }
        data.user.push(newUserdata)
        fs.writeFile('user.json', JSON.stringify(user), (err) => {
            if (err) throw new Error("Failed to Insert");
        });
        res.status(200).json({ information: 'Data Recieved Sucessfully', user: newUserdata, statusCode: 200 })
    } catch (err) {
        res.status(400).json({ information: err.information, user: null, statusCode: 400 })
    }
});


export const updatedUser = ((req, res) => {
    try {
        const { id } = req.params;
        const mainbody = req.body;
        const updatedUserdata = {
            id: parseInt(id),
            ...mainbody
        }
        const adduser = user.users.filter((data) => data.id != id);
        updatedUserdata.push(adduser);
        user.users = adduser;
        fs.writeFile('user.json', JSON.stringify(user), (err) => {
            if (err) throw new Error("Failed to Modify Data");
        });
        res.status(200).json({ information: 'Data Recieved Sucessfully', user: adduser, statusCode: 200 })
    } catch (err) {
        res.status(400).json({ information: err.information, user: null, statusCode: 400 })
    }
});


export const deleteuser = ((req, res) => {
    try {
        const { id } = req.params;
        const deluser = user.users.filter((data) => data.id != id);
        user.users = deluser;
        fs.writeFile('user.json', JSON.stringify(user), (err) => {
            if (err) throw new Error("Failed to Modify Data");
        });
        res.status(200).json({ information: 'Data Recieved Sucessfully', user: deluser, statusCode: 200 })
    } catch (err) {
        res.status(400).json({ information: err.information, user: null, statusCode: 400 })
    }
});
