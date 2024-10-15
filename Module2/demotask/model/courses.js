import mongoose from "mongoose";

export const courseSchema = new mongoose.Schema({
    courseName: {
        type: String,
        required: [true, 'courseName is required'],
        minlength: [5, 'courseName must be at least 3 characters long'],
        maxlength: [20, 'courseName must be at most 10 characters long'],
    },
    amount: {
        type: Number,
        required: [true, 'Amount is required'],
        minlength: [5, 'Amount must be at least 5 characters long'],
        maxlength: [10, 'Amount must be at most 10 characters long'],
    },
    duration :{
        type: String,
        required: [true, 'Duration is required'],
        minlength: [3, 'Duration must be at least 3 characters long'],
        maxlength: [10, 'Duration must be at most 10 characters long'],
    },
    user: [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user',
    }],
}, { timestamps: true });

export const courseModel = mongoose.model('course', courseSchema);
