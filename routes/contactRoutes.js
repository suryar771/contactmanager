const express = require('express');
const router = express.Router();

router.route("/contacts").get((req,res)=>{
    res.status(200).json({message:"get all contacts"});

}).post((req,res)=>{
    res.status(200).json({message:"create contact"});
}).put((req,res)=>{
    res.status(200).json({message:"update contact"});
}).delete((req,res)=>{
    res.status(200).json({message:"delete contact"});
});

router.route("/contacts/:id").get((req,res)=>{
    res.status(200).json({message:"get contact"});
}).put((req,res)=>{
    res.status(200).json({message:"update contact"});
}).delete((req,res)=>{
    res.status(200).json({message:"delete contact"});
});


module.exports = router;
