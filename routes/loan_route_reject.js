var loanReject = require('../models/loan_model');
var express = require('express');
var router = express.Router();


router.put('/:loan_id',function(req,res,next){
  loanReject.updateLoanStatusForReject(req.params.loan_id,function(err,rows){
   if(err)
   {
   res.json(err);
   }
   else{
   res.json(rows);
   }
  });
});


router.put('/',function(req,res,next){
  loanReject.updateRejectedLoanReason(req.body,function(err,rows){
   if(err)
   {
   res.json(err);
   }
   else{
   res.json(rows);
   }
  });
});
module.exports = router;