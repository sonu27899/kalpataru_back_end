var count_category_id = require('../admin models/dashboard_model');
var express = require('express');
var router = express.Router();
router.get('/:category_id',function(req,res,next){
    count_category_id.CountCategoryId(req.params.category_id,function(err,rows){
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