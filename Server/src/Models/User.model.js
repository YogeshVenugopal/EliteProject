import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true
    },
    password:{
        type: String,
        required: true,
        select: false
    },
    phone: String,
    role:{
        type: String,
        enum:['student', 'staff', 'admin'],
        required: true,
    },
    isActive:{
        type: Boolean,
        default: true
    }
},{
    timestamps: true,
    discriminatorKey: 'role'
})

const User = mongoose.model('User', userSchema);

export default User;