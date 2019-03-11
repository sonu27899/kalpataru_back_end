var wish=require('../user models/wishlist_model');
var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
    wish.getAllProductwishlist(function(err,rows){
     if(err)
     {
     res.json(err);
     }
     else{
     res.json(rows);
     }
    });
  });

  router.get('/:user_name',function(req,res,next){
    wish.getProductsById(req.params.user_name,function(err,rows){
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
    wish.addToCart(req.body,function(err,rows){
     if(err)
     {
     res.json(err);
     }
     else{
     res.json(rows);
     }
    });
  });

  router.delete('/:user_name',function(req,res,next){
    wish.deleteProduct(req.params.user_name,req.body,function(err,rows){
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