import { userModel } from '../model/user.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { bankModel } from '../model/bank.js'
import { courseModel } from '../model/courses.js';

export const registeruser = (async (req, res) => {
    try {
        const { firstName, lastName, email, password, gender, company, role } = req.body; const existingdata = await userModel.findOne({ email }).exec();
        if (existingdata) {
            throw new Error("User already exists with provided email/phone, please try with new one.")
        }
        const encpass = await bcrypt.hash(password, 10)
        const result = await userModel.create({
            firstName,
            lastName,
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
        res.json({ token: jwt.sign({ id: existingdata.id, email: existingdata.email, fristname: existingdata.fristname, role: existingdata.role }, 'RESTFULAPIs') });
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: err.message, user: null, statusCode: 400 })
    }
});

export const getuserbyid = (async (req, res) => {
    try {
        let id = req.params.id;
        const getusers = await userModel.findById(id);
        res.status(200).json({ message: 'Data Recieved Sucessfully', user: getusers, statusCode: 200 })
    } catch (err) {
        res.status(400).json({ message: err.message, user: null, statusCode: 400 })
    }
});

export const getuser = (async (req, res) => {
    try {
        const getusers = await userModel.find();
        res.status(200).json({ message: 'Data Recieved Sucessfully', user: getusers, statusCode: 200 })
    } catch (err) {
        res.status(400).json({ message: err.message, user: null, statusCode: 400 })
    }
});

export const updatedUser = (async (req, res) => {
    try {
        const databody = req.body;
        let id = req.params.id;
        const updatedata = await userModel.findByIdAndUpdate(id, { name: databody.name, email: databody.email, phone: databody.phone, address: databody.address, company: databody.company })
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

export const addbankuser = (async (req, res) => {
    try {
        const userid = req.user.id;
        console.log(userid);
        const bankid = req.params.id;
        const existingbank = await bankModel.findById(bankid);
        if (!existingbank) throw new Error('Invalid Bank ID');
        const user = await userModel.findById(userid);
        if (!user) throw new Error('User not found');
        const newBank = {
            accNo: Math.floor(Math.random() * 10000000000),
            bankId: existingbank
        }
        user.bank.push(newBank);
        await user.save();
        res.status(201).json({ message: 'Details Updated Sucessfully', user: user, statusCode: 200 });
    } catch (err) {
        res.status(400).json({ message: err.message, user: null, statusCode: 400 })
    }
});

export const addcoursetouser = (async(req,res)=>{
    try{
         const userid=req.user.id;
         console.log(userid);
         const courseid=req.params.id;
         const existingcourse = await courseModel.findById(courseid);
         if(!existingcourse) throw new Error('Invalid Bank ID');
         const user = await userModel.findById(userid);
        if (!user) throw new Error('User not found');
         user.course.push(existingcourse);
         await user.save();
         res.status(201).json({ message: 'Details Updated Sucessfully', user: user, statusCode: 200 });
    }catch (err) {
        res.status(400).json({ message: err.message, user: null, statusCode: 400 })
    }
    });