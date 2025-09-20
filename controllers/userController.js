const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");

const registerUser = asyncHandler( async (req,res)=>{
    const {username,email,password} = req.body;
    if(!username || !email || !password){
        res.status(400);
        throw new Error("All fields are mandatory!");
    }
    const userAvailable = await User.findOne({email});
    if(userAvailable){
        res.status(400);
        throw new Error("User already exists");
    }
    const userPassword = await bcrypt.hash(password,10);
    console.log("User password: ",userPassword);
    const user = await User.create({username,email,password:userPassword});
    res.status(201).json(user);
})

const loginUser = asyncHandler( async (req,res)=>{
    res.json({message:"Login the user"});
})

const currentUser = asyncHandler( async (req,res)=>{
    res.json({message:"current user"});
})

module.exports = {registerUser,loginUser,currentUser};