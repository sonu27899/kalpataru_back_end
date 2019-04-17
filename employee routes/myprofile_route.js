var profile = require("../employee models/personal_data_model");
var express = require("express");
var router = express.Router();
router.get("/:employee_email", function(req, res, next) {
  profile.getProfileByEmail(req.params.employee_email, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.put("/:employee_email", function(req, res, next) {
    profile.updateProfile(req.params.employee_email,req.body, function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  });
  
module.exports = router;
