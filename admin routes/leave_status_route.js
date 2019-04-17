var leaveManagement=require('../employee models/leave_model');
var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
    leaveManagement.getAllLeaveEmployee(function(err,rows){
     if(err)
     {
     res.json(err);
     }
     else{
     res.json(rows);
     }
    });
  });

  router.put('/:leave_id',function(req,res,next){
    leaveManagement.updateLeaveStatus(req.params.leave_id,function(err,rows){
     if(err)
     {
     res.json(err);
     }
     else{
     res.json(rows);
     }
    });
  });

  router.delete('/:leave_id', function (req, res, next) {
    leaveManagement.deleteLeaveReq(req.params.leave_id, function (err, rows) {
      if (err) {
        res.json(err);
      }
      else {
        res.json(rows);
      }
    });
  });
  
  router.get("/:leave_id", function(req, res, next) {
    leaveManagement.getAllLeaveStatus(req.params.leave_id,function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  });
  module.exports=router;