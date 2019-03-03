var loan = require('../employee models/loan_model');
var express = require('express');
var router = express.Router();

router.get("/:employee_email", function(req, res, next) {
    loan.getuserdata(req.params.employee_email,function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  });
  module.exports = router;
