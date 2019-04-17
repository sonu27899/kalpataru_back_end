var loanId=require('../admin models/loan_model');
var express = require('express');
var router = express.Router();



  router.get('/:loan_id',function(req,res,next){
    loanId.getLoanId(req.params.loan_id,function(err,rows){
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