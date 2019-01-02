var product=require('../employee models/product_model');
var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
    product.getAllProduct(function(err,rows){
     if(err)
     {
     res.json(err);
     }
     else{
     res.json(rows);
     }
    });
  });

  router.get('/:product_id',function(req,res,next){
    product.getProductById(req.params.product_id,function(err,rows){
     if(err)
     {
     res.json(err);
     }
     else{
     res.json(rows);
     }
    });
  });

  
  router.delete('/:product_id',function(req,res,next){
    product.deleteProduct(req.params.product_id,function(err,rows){
     if(err)
     {
     res.json(err);
     }
     else{
     res.json(rows);
     }
    });
  });

  router.post('/',function(req,res,next){
    product.addProduct(req.body,function(err,rows){
     if(err)
     {
     res.json(err);
     }
     else{
     res.json(rows);
     }
    });
  });  

  router.put('/:product_id',function(req,res,next){
    product.updateProduct(req.params.product_id,req.body,function(err,rows){
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