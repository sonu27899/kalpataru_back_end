var FilterInBetweenDepth=require('../admin models/dashboard_model');
var express = require('express');
var router = express.Router();

router.get('/:first/:last', function (req, res, next) {
  FilterInBetweenDepth.getAllProductDepthInBetween(req.params.first,req.params.last,function (err, rows) {
    if (err) {
      res.json(err);
    }
    else {
      res.json(rows);
    }
  });
});


  module.exports=router;


