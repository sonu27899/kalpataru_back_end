var salary_mode = require('../employee models/salary_model');
var express = require('express');
var router = express.Router();
router.get("/", function(req, res, next) {
    salary_mode.getAllEmp(function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  });
  module.exports = router;