var category1=require('../models/category_model');
var express = require('express');
var router = express.Router();

  router.get('/:category_name',function(req,res,next){
    category1.getCategoryByName(req.params.category_name,function(err,rows){
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