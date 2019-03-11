var customer_invoice=require('../admin models/customer_invoice_model');
var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
    customer_invoice.getAllCustomerInvoice(function(err,rows){
     if(err)
     {
     res.json(err);
     }
     else{
     res.json(rows);
     }
    });
  });

  router.get('/:category_id',function(req,res,next){
    customer_invoice.getProductByCategoryId(req.params.category_id,function(err,rows){
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
    customer_invoice.addCustomerInvoice(req.body,function(err,rows){
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