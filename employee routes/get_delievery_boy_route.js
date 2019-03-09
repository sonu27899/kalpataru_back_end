var order_mode = require('../employee models/order_model');
var express = require('express');
var router = express.Router();
router.get("/", function(req, res, next) {
    order_mode.getAllDelieveryBoy(function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  });

  module.exports = router;