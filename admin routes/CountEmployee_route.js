var count_employee = require('../admin models/dashboard_model');
var express = require('express');
var router = express.Router();
router.get('/',function(req,res,next){
    count_employee.CountEmployee(function(err,rows){
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