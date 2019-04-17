var leave = require('../employee models/leave_model');
var express = require('express');
var router = express.Router();

router.post('/',function(req,res,next){
    leave.addleave(req.body,function(err,rows){
     if(err)
     {
     res.json(err);
     }
     else{
     res.json(rows);
     }
    });
  });  

  router.get("/:employee_email", function(req, res, next) {
    leave.getmyleave(req.params.employee_email,function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  });


  module.exports = router;