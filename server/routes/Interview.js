let express = require('express');
let router = express.Router();
let Interview = require('../models/Interview'); 

router.post('/interview',(req,res)=>{
    let {experience, role, interviewType, numberOfQuestions, questions} = req.body;
    try{
        if(!experience || role || interviewType || numberOfQuestions || questions){
            return res.status(400).json({msg: "Some fileds are empty please check it again"});
        }

        Interview.create({
            experience, role, interviewType, numberOfQuestions, questions
        })
    }catch(err){
    }
})