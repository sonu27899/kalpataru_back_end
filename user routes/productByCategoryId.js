var product=require('../admin models/product_model');
var express = require('express');
var router = express.Router();


  router.get('/:category_id',function(req,res,next){
    product.getProductByCategoryId(req.params.category_id,function(err,rows){
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