var UserSignup=require('../models/signup_model');
var express = require('express');
var router = express.Router();

router.post('/',function(req,res,next){
    UserSignup.addUserinformation(req.body,function(err,rows){
     if(err)
     {
     res.json(err);
     }
     else{
     res.json(rows);
     }
    });
  });

  router.get('/',function(req,res,next){
    UserSignup.getAllSignupRecord(function(err,rows){
     if(err)
     {
     res.json(err);
     }
     else{
     res.json(rows);
     }
    });
  });

  router.get('/:user_type',function(req,res,next){
    UserSignup.getUserByType(req.params.user_type,function(err,rows){
     if(err)
     {
     res.json(err);
     }
     else{
     res.json(rows);
     }
    });
  });
  module.exports=router;