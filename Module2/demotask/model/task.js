import mongoose from "mongoose";

export const userSchema = new mongoose.Schema({
    fristname: {
        type: String,
        required: [true, 'Firstname is required'],
        minlength: [3, 'Firstname must be at least 3 characters long'],
        maxlength: [10, 'Firstname must be at most 10 characters long'],
        match: [/^[A-Za-z]+$/, 'Firstname should only contain alphabets'],
        unique: true,
    },
    lastname: {
        type: String,
        minlength: [1, 'lastname must be at least 1 characters long'],
        maxlength: [10, 'lastname must be at most 10 characters long'],
        match: [/^[A-Za-z]+$/, 'lastname should only contain alphabets'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        match: [/\S+@\S+\.\S+/, 'Please enter a valid email address'],
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [6, 'Password must be at least 8 characters long'],
    },
    gender: {
        type: String,
        required: [true, 'Firstname is required'],
        minlength: [3, 'Firstname must be at least 3 characters long'],
        maxlength: [10, 'Firstname must be at most 10 characters long'],
        match: [/^[A-Za-z]+$/, 'Firstname should only contain alphabets'],
    },
    Company: {
        type: String,
        minlength: [10, 'Firstname must be at least 3 characters long'],
        maxlength: [50, 'Firstname must be at most 10 characters long'],
    },
    role :{
        type: String,
        minlength: [1, 'Role must be at least 3 characters long'],
        maxlength: [20, 'Role must be at most 10 characters long'],
    }
}, { timestamps: true });

export const userModel = mongoose.model('user', userSchema);
