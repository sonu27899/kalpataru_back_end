var leave_type=require('../employee models/leave_type_model');
var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
    leave_type.getAllLeaveType(function(err,rows){
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