var bill = require('../admin models/order_model');
var express = require('express');
var router = express.Router();

router.get("/:order_id", function(req, res, next) {
    bill.getBillDetails(req.params.order_id,function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  });
  module.exports = router;
