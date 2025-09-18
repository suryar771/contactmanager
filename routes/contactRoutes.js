const express = require('express');
const router = express.Router();

router.route("/contacts").get((req,res)=>{
    res.status(200).json({message:"get all contacts"});

}).post((req,res)=>{
    res.status(200).json({message:"create contact"});
});


module.exports = router;
