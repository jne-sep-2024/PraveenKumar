import { commentsModel } from '../model/comment.js';

export const addcommment = (async (req, res) => {
    try {
        const { content, post } = req.body;
        const result = await commentsModel.create({
            content,
            post,
            author: req.user.id
        });
        res.status(200).json({ message: 'Comment Added Sucessfully', user: result, statusCode: 200 })
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: err.message, user: null, statusCode: 400 })
    }
})

export const getcommmentbyid = (async (req, res) => {
    try {
        let id = req.params.id;
        const getusers = await commentsModel.findById(id).populate('author', '_id email firstname ').populate('post', '_id title');
        res.status(200).json({ message: 'Comment Recieved Sucessfully', user: getusers, statusCode: 200 })
    } catch (err) {
        res.status(400).json({ message: err.message, user: null, statusCode: 400 })
    }
});

export const getcommment = (async (req, res) => {
    try {
        const getusers = await commentsModel.find().populate('author', '_id email firstname ').populate('post', '_id title');
        res.status(200).json({ message: 'Comment Recieved Sucessfully', user: getusers, statusCode: 200 })
    } catch (err) {
        res.status(400).json({ message: err.message, user: null, statusCode: 400 })
    }
});

export const updatecommment = (async (req, res) => {
    try {
        const { title, content, createdAt } = req.body;
        let id = req.params.id;
        const updatedata = await commentsModel.findByIdAndUpdate(id, { content, createdAt })
        if (!updatedata && updatedata == '') throw new Error("Please Enter the Comment");
        res.status(200).json({ message: 'Comment Added Sucessfully', user: updatedata, statusCode: 200 })
    } catch (err) {
        res.status(400).json({ message: err.message, user: null, statusCode: 400 })
    }
});

export const deletecommment = (async (req, res) => {
    try {
        let id = req.params.id;
        const delusers = await commentsModel.findByIdAndDelete(id);
        res.status(200).json({ message: 'Comment Deleted Sucessfully', user: delusers, statusCode: 200 })
    } catch (err) {
        res.status(400).json({ message: err.message, user: null, statusCode: 400 })
    }
});