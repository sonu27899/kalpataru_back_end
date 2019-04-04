var SortingFilter=require('../admin models/dashboard_model');
var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  SortingFilter.getAllProductHighToLow(function (err, rows) {
    if (err) {
      res.json(err);
    }
    else {
      res.json(rows);
    }
  });
});


  module.exports=router;

