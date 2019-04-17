var order=require('../user models/order');
var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
    order.getOrder(function(err,rows){
     if(err)
     {
     res.json(err);
     }
     else{
     res.json(rows);
     }
    });
  });

  router.get('/:fk_user_email',function(req,res,next){
    order.getOrderById(req.params.fk_user_email,function(err,rows){
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
    order.addToOrder(req.body,function(err,rows){
     if(err)
     {
     res.json(err);
     }
     else{
     res.json(rows);
     }
    });
  });

  // router.delete('/:fk_user_email/:fk_product_id',function(req,res,next){
  //   cart.deleteProduct(req.params.fk_user_email,req.params.fk_product_id,function(err,rows){
  //    if(err)
  //    {
  //    res.json(err);
  //    }
  //    else{
  //    res.json(rows);
  //    }
  //   });
  // });
 
  // router.put('/:user_email',function(req,res,next){
  //   cart.updatePayment(req.params.user_email,req.body,function(err,rows){
  //    if(err)
  //    {
  //    res.json(err);
  //    }
  //    else{
  //    res.json(rows);
  //    }
  //   });
  // });

  module.exports=router;