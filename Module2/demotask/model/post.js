import mongoose from "mongoose";

export const postsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'title is required'],
        minlength: [5, 'title must be at least 3 characters long'],
        maxlength: [20, 'title must be at most 10 characters long'],
    },
    content: {
        type: String,
        required: [true, 'content is required'],
        minlength: [5, 'content must be at least 3 characters long'],
        maxlength: [30, 'content must be at most 10 characters long'],
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user', required: true
        
    },
}, { timestamps: true });

export const postsModel = mongoose.model('posts', postsSchema);
