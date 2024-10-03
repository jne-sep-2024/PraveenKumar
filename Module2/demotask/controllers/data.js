import { userModel } from '../model/task.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


export const registeruser = (async (req, res) => {
    try {
        const { fristname, lastname, email, password, gender, company, role } = req.body;
        const existingdata = await userModel.findOne({ email, fristname, password, gender }).exec();
        console.log("existingdata: ", existingdata);
        if (existingdata) {
            throw new Error("User already exists with provided email/phone, please try with new one.")
        }
        const encpass = await bcrypt.hash(password, 10)
        const result = await userModel.create({
            fristname,
            lastname,
            email,
            password: encpass,
            gender,
            company,
            role
        });
        res.status(200).json({ message: 'User Registred Sucessfully', user: result, statusCode: 200 })
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: err.message, user: null, statusCode: 400 })
    }
});

export const loginuser = (async (req, res) => {
    try {
        const { email, password, role } = req.body;
        const existingdata = await userModel.findOne({ email }).exec();
        if (!existingdata) {
            throw new Error("User NOT  Exist.")
        }
        const ismatch = await bcrypt.compare(password, existingdata.password);
        if (!ismatch) {
            throw new Error("Password Not Match");
        }
        res.json({ token: jwt.sign({ email: existingdata.email, fristname: existingdata.fristname, role: existingdata.role }, 'RESTFULAPIs') });
    } catch (err) {
        console.log(err);
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

export const getuserbyid = (async (req, res) => {
    try {
        const getusers = await userModel.find({});
        res.status(200).json({ message: 'Data Recieved Sucessfully', user: getusers, statusCode: 200 })
    } catch (err) {
        res.status(400).json({ message: err.message, user: null, statusCode: 400 })
    }
});

export const updatedUser = (async (req, res) => {
    try {
        const databody = req.body;
        let id = req.params.id;
        const updatedata = await user.findByIdAndUpdate(id, { name: databody.name, email: databody.email, phone: databody.phone, address: databody.address })
        if (!updatedata && updatedata == '') throw new Error("Please Enter the Valid ID", id);
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