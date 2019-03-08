var loan_delete = require('../models/loan_model');
var express = require('express');
var router = express.Router();

  router.delete('/:loan_status', function (req, res, next) {
    loan_delete.deleteLoanFromUpdate(req.params.loan_status, function (err, rows) {
      if (err) {
        res.json(err);
      }
      else {
        res.json(rows);
      }
    });
  });

  router.get('/:loan_status', function (req, res, next) {
    loan_delete.getAllLoanStatus(req.params.loan_status,function (err, rows) {
      if (err) {
        res.json(err);
      }
      else {
        res.json(rows);
      }
    });
  });

module.exports = router;