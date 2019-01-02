var user = require("../employee models/login_model");
var express = require("express");
var router = express.Router();

router.post('/:employee_email', function(req, res, next) {
      user.getLogin(req.params.employee_email,req.body,function(err, rows) {
      if (err) 
      {
          res.json(err);
      } 
      else
     {
      res.json(rows);
     }
  });
});
module.exports = router;