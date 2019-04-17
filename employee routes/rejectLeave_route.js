var rejectLeave = require('../employee models/leave_model');
var express = require('express');
var router = express.Router();

router.put('/:leave_id',function(req,res,next){
    rejectLeave.RejectLeaveStatus(req.params.leave_id,function(err,rows){
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