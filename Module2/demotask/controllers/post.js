import { postsModel } from '../model/post.js';

export const addpost = (async (req, res) => {
    try {
        const { title, content } = req.body;
        const result = await postsModel.create({
            title,
            content,
            author: req.user.id
        });
        res.status(200).json({ message: 'Post Created Sucessfully', user: result, statusCode: 200 });
        if(!result) throw new Error('Enter Valid Details')
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: err.message, user: null, statusCode: 400 })
    }
})

export const getpost = (async (req, res) => {
    try {
        const getusers = await postsModel.find().populate('author', '_id firstName gender email');  
        res.status(200).json({ message: 'Post Recieved Sucessfully', user: getusers, sfirstnametatusCode: 200 })
    } catch (err) {
        res.status(400).json({ message: err.message, user: null, statusCode: 400 })
    }
})

export const getpostbyid = (async (req, res) => {
    try {
        let id = req.params.id;user
        const getusers = await postsModel.findById({id}).populate('author', '_id firstname email');
        if (!getusers && getusers=='') throw new Error ("Enter Valid ID");   
        console.log(getusers)
        res.status(200).json({ message: 'Post Recieved Sucessfully', user: getusers, statusCode: 200 })
    } catch (err) {
        res.status(400).json({ message: err.message, user: null, statusCode: 400 })
    }
})

export const updatepost = (async (req, res) => {
    try {
        const { title, content, createdAt } = req.body;
        let id = req.params.id;
        const updatedata = await postsModel.findByIdAndUpdate(id, { title, content, createdAt })
        if (!updatedata && updatedata == '') throw new Error("Please Enter the Post");
        res.status(200).json({ message: 'Post Added Sucessfully', user: updatedata, statusCode: 200 })
    } catch (err) {
        res.status(400).json({ message: err.message, user: null, statusCode: 400 })
    }
})

export const deletepost = (async (req, res) => {
    try {
        let id = req.params.id;
        const delusers = await postsModel.findByIdAndDelete(id);
        if (!delusers && delusers=='') throw new Error ("Enter Valid ID");   
        res.status(200).json({ message: 'Post Deleted Sucessfully', user: delusers, statusCode: 200 })
    } catch (err) {
        res.status(400).json({ message: err.message, user: null, statusCode: 400 })
    }
});
