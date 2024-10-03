import mongoose from "mongoose";

export const commentsSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
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
