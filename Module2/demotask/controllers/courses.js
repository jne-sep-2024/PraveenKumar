import { courseModel } from '../model/courses.js';
import { userModel } from '../model/user.js';

export const addcourse = (async (req, res) => {
    try {
        const { courseName, amount, duration } = req.body;
        const result = await courseModel.create({
            courseName,
            amount,
            duration
        });
        res.status(200).json({ message: 'Post Created Sucessfully', user: result, statusCode: 200 });
        if(!result) throw new Error('Enter Valid Details')
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: err.message, user: null, statusCode: 400 })
    }
})

export const getcourse = (async (req, res) => {
    try {
        const getusers = await courseModel.find();  
        res.status(200).json({ message: 'Post Recieved Sucessfully', user: getusers, statusCode: 200 })
    } catch (err) {
        res.status(400).json({ message: err.message, user: null, statusCode: 400 })
    }
})

export const getcoursebyid = (async (req, res) => {
    try {
        let id = req.params.id;user
        const getusers = await courseModel.findById({id}).populate('author');
        if (!getusers && getusers=='') throw new Error ("Enter Valid ID");   
        console.log(getusers)
        res.status(200).json({ message: 'Post Recieved Sucessfully', user: getusers, statusCode: 200 })
    } catch (err) {
        res.status(400).json({ message: err.message, user: null, statusCode: 400 })
    }
})

export const updatecourse = (async (req, res) => {
    try {
        const { courseName, amount, duration } = req.body;
        let id = req.params.id;
        const updatedata = await courseModel.findByIdAndUpdate(id, { courseName, amount, duration })
        if (!updatedata && updatedata == '') throw new Error("Please Enter the Post");
        res.status(200).json({ message: 'Post Added Sucessfully', user: updatedata, statusCode: 200 })
    } catch (err) {
        res.status(400).json({ message: err.message, user: null, statusCode: 400 })
    }
})

export const deletecourse = (async (req, res) => {
    try {
        let id = req.params.id;
        const delusers = await courseModel.findByIdAndDelete(id);
        if (!delusers && delusers=='') throw new Error ("Enter Valid ID");   
        res.status(200).json({ message: 'Post Deleted Sucessfully', user: delusers, statusCode: 200 })
    } catch (err) {
        res.status(400).json({ message: err.message, user: null, statusCode: 400 })
    }
});

export const addbankusertocourse = (async(req,res)=>{
    try{
         const courseid=req.user.id;
         const userid=req.params.id;
         const existinguser = await userModel.findById(userid);
         if(!existinguser) throw new Error('Invalid Bank ID');
         const course = await courseModel.findById(courseid);
        if (!course) throw new Error('User not found');
         course.user.push(existinguser);
         await course.save();
         res.status(201).json({ message: 'Details Updated Sucessfully', user: course, statusCode: 200 });
    }catch (err) {
        res.status(400).json({ message: err.message, user: null, statusCode: 400 })
    }
    });

