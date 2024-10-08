import { bankModel } from '../model/bank.js';

export const addbank = (async (req, res) => {
    try {
        const { bankName, ifscCode, location } = req.body;
        const result = await bankModel.create({
            bankName,
            ifscCode,
            location
        });
        res.status(200).json({ message: 'Post Created Sucessfully', user: result, statusCode: 200 });
        if(!result) throw new Error('Enter Valid Details')
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: err.message, user: null, statusCode: 400 })
    }
})

export const getbank = (async (req, res) => {
    try {
        const getusers = await bankModel.find();  
        res.status(200).json({ message: 'Post Recieved Sucessfully', user: getusers, statusCode: 200 })
    } catch (err) {
        res.status(400).json({ message: err.message, user: null, statusCode: 400 })
    }
})

export const getbankbyid = (async (req, res) => {
    try {
        let id = req.params.id;user
        const getusers = await bankModel.findById({id}).populate('author');
        if (!getusers && getusers=='') throw new Error ("Enter Valid ID");   
        console.log(getusers)
        res.status(200).json({ message: 'Post Recieved Sucessfully', user: getusers, statusCode: 200 })
    } catch (err) {
        res.status(400).json({ message: err.message, user: null, statusCode: 400 })
    }
})

export const updatebank = (async (req, res) => {
    try {
        const { title, content, createdAt } = req.body;
        let id = req.params.id;
        const updatedata = await bankModel.findByIdAndUpdate(id, { bankName, ifscCode, location })
        if (!updatedata && updatedata == '') throw new Error("Please Enter the Post");
        res.status(200).json({ message: 'Post Added Sucessfully', user: updatedata, statusCode: 200 })
    } catch (err) {
        res.status(400).json({ message: err.message, user: null, statusCode: 400 })
    }
})

export const deletebank = (async (req, res) => {
    try {
        let id = req.params.id;
        const delusers = await bankModel.findByIdAndDelete(id);
        if (!delusers && delusers=='') throw new Error ("Enter Valid ID");   
        res.status(200).json({ message: 'Post Deleted Sucessfully', user: delusers, statusCode: 200 })
    } catch (err) {
        res.status(400).json({ message: err.message, user: null, statusCode: 400 })
    }
});



