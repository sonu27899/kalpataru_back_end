var userlogin=require('../models/login_model');
var express = require('express');
var router = express.Router();

router.post('/',function(req,res,next){
    userlogin.getLoginByEmailAndPassword(req.body,function(err,rows){
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
    userlogin.getLoginByEmail(req.params.user_email,function(err,rows){
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