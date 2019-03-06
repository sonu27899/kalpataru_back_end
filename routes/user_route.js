var user=require('../models/user_model');
var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
    user.getAllUser(function(err,rows){
     if(err)
     {
     res.json(err);
     }
     else{
     res.json(rows);
     }
    });
  });

  router.get('/:user_email',function(req,res,next){
    user.getUserByEmail(req.params.user_email,function(err,rows){
     if(err)
     {
     res.json(err);
     }
     else{
     res.json(rows);
     }
    });
  });

  
  router.delete('/:user_email',function(req,res,next){
    user.deleteUser(req.params.user_email,function(err,rows){
     if(err)
     {
     res.json(err);
     }
     else{
     res.json(rows);
     }
    });
  });

  
  router.put('/:user_email',function(req,res,next){
    user.updateUser(req.params.user_email,req.body,function(err,rows){
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