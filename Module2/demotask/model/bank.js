import mongoose from "mongoose";

export const bankSchema = new mongoose.Schema({
    bankName: {
        type: String,
        required: [true, 'Bankname is required'],
        minlength: [5, 'Bankname must be at least 3 characters long'],
        maxlength: [20, 'Bankname must be at most 10 characters long'],
    },
    ifscCode: {
        type: String,
        required: [true, 'IFSCCODE is required'],
        minlength: [5, 'IFSCCODE must be at least 5 characters long'],
        maxlength: [10, 'IFSCCODE must be at most 10 characters long'],
    },
    location :{
        type: String,
        required: [true, 'location is required'],
        minlength: [3, 'location must be at least 3 characters long'],
        maxlength: [10, 'location must be at most 10 characters long'],
    }
}, { timestamps: true });

export const bankModel = mongoose.model('bank', bankSchema);
