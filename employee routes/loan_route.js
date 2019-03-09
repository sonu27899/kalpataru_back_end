var loan = require('../employee models/loan_model');
var express = require('express');
var router = express.Router();

router.get("/", function(req, res, next) {
    loan.getLoan(function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  });

  router.get("/:loan_id", function(req, res, next) {
    loan.getLoanDetails(req.params.loan_id,function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  });
 
  router.post('/',function(req,res,next){
    loan.addLoanNotification(req.body,function(err,rows){
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