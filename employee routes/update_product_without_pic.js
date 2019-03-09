var productImage = require('../models/product_model');
var express = require('express');
var router = express.Router();

router.put('/:product_id',function(req,res,next){
  productImage.updateproductwithoutpic(req.params.product_id,req.body,function(err,rows){
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