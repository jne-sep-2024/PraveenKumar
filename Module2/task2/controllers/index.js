import { getDefaultResultOrder } from 'dns';
import { userModel } from '../model/user.js';
import user from '../user.json' assert { type: "json" };
import fs from 'fs';


export const getdata = (async (req, res) => {
    try {
        const getusers = await userModel.find({});
        res.status(200).json({ message: 'Data Recieved Sucessfully', user: getusers, statusCode: 200 })
    } catch (err) {
        res.status(400).json({ message: err.message, user: null, statusCode: 400 })
    }
});

export const getuser = (async (req, res) => {
    try {
        let id = req.params.id;
        const getusers = await userModel.findById(id);
        res.status(200).json({ message: 'Data Recieved Sucessfully', user: getusers, statusCode: 200 })
    } catch (err) {
        res.status(400).json({ message: err.message, user: null, statusCode: 400 })
    }
});

export const postdata = (async (req, res) => {
    try {
        const databody = req.body;
        const existingdata = await userModel.findOne({ email: databody.email }).exec();
        console.log("existingdata: ", existingdata);
        if (existingdata) {
            throw new Error("User already exists with provided email/phone, please try with new one.")
        }
        const result = await userModel.create({
            name: databody.name,
            email: databody.email,
            phone: databody.phone,
            address: databody.address
        });
        console.log('Result is', result);
        res.status(200).json({ message: 'Data Added Sucessfully', user: userModel, statusCode: 200 })
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: err.message, user: null, statusCode: 400 })
    }
});


export const updatedUser = (async(req, res) => {
    try {
        const databody = req.body;
        let id = req.params.id;
        const updatedata=await userModel.findByIdAndUpdate(id,{name: databody.name,email: databody.email,phone :databody.phone, address: databody.address})
        if(!updatedata && updatedata =='') throw new Error("Please Enter the Valid ID",id);
        res.status(200).json({ message: 'User Added Sucessfully', user: updatedata, statusCode: 200 })
} catch (err) {
    res.status(400).json({ message: err.message, user: null, statusCode: 400 })
}
});


export const deleteuser = (async (req, res) => {
    try {
        let id = req.params.id;
        const delusers = await userModel.findByIdAndDelete(id);
        res.status(200).json({ message: 'User Deleted Sucessfully', user: delusers, statusCode: 200 })
    } catch (err) {
        res.status(400).json({ message: err.message, user: null, statusCode: 400 })
    }
});
