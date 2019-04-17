var cart=require('../user models/cart_model');
var express = require('express');
var router = express.Router();

 
  router.put('/:item1/:item/:item2',function(req,res,next){
    cart.updateqty(req.params.item1,req.params.item,req.params.item2,req.body,function(err,rows){
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