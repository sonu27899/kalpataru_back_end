var colour=require('../models/colour_model');
var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
    colour.getAllColour(function(err,rows){
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