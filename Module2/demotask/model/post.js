import mongoose from "mongoose";

export const postsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user', required: true
    },
}, { timestamps: true });

export const postsModel = mongoose.model('posts', postsSchema);
