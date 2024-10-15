import mongoose from "mongoose";

export const commentsSchema = new mongoose.Schema({
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
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'posts', required: true
    },

}, { timestamps: true });

export const commentsModel = mongoose.model('comments', commentsSchema);
