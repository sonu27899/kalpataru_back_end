var order=require('../models/order_model');
var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
  order.getAllOrder(function(err,rows){
   if(err)
   {
   res.json(err);
   }
   else{
   res.json(rows);
   }
  });
});

router.delete('/:order_id',function(req,res,next){
  order.deleteOrder(req.params.order_id,function(err,rows){
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