var order=require('../admin models/order_model');
var express = require('express');
var router = express.Router();


router.post('/',function(req,res,next){
  order.addOrder(req.body,function(err,rows){

   if(err)
   {
   res.json(err);
   }
   else{
   res.json(rows);
   }
  });
});


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
  module.exports=router;