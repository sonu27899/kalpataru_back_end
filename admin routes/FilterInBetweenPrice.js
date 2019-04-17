var FilterInBetween=require('../admin models/dashboard_model');
var express = require('express');
var router = express.Router();

router.get('/:first/:last', function (req, res, next) {
  FilterInBetween.getAllProductPriceInBetween(req.params.first,req.params.last,function (err, rows) {
    if (err) {
      res.json(err);
    }
    else {
      res.json(rows);
    }
  });
});


  module.exports=router;


