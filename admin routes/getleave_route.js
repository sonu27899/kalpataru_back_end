var leave=require('../employee models/leave_model');
var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
    leave.getAllLeaveEmployee(function(err,rows){
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