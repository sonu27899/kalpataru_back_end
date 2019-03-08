var loan = require('../models/loan_model');
var express = require('express');
var router = express.Router();


router.put('/:loan_id',function(req,res,next){
  loan.updateLoanStatus(req.params.loan_id,function(err,rows){
   if(err)
   {
   res.json(err);
   }
   else{
   res.json(rows);
   }
  });
});

router.get('/', function (req, res, next) {
    loan.getAllLoanReq(function (err, rows) {
      if (err) {
        res.json(err);
      }
      else {
        res.json(rows);
      }
    });
  });

  router.delete('/:loan_id', function (req, res, next) {
    loan.deleteLoanReq(req.params.loan_id, function (err, rows) {
      if (err) {
        res.json(err);
      }
      else {
        res.json(rows);
      }
    });
  });
module.exports = router;