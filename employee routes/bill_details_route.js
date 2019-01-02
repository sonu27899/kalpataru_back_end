var pastorder = require('../employee models/bill_model');
var express = require('express');
var router = express.Router();

router.get("/:bill_id", function(req, res, next) {
    pastorder.getBillDetails(req.params.bill_id,function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  });
  module.exports = router;