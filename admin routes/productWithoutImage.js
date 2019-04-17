var productImage = require('../admin models/product_model');
var express = require('express');
var router = express.Router();

router.put('/:product_id',function(req,res,next){
  productImage.updateProductWithoutImage(req.params.product_id,req.body,function(err,rows){
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