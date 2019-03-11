var count_user = require('../admin models/dashboard_model');
var express = require('express');
var router = express.Router();
router.get('/',function(req,res,next){
    count_user.CountUser(function(err,rows){
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