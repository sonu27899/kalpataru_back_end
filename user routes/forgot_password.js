var forget = require('../user models/forgot_password')
var express = require('express');
var router = express.Router();

router.get('/:user_email?', function (req, res, next) {
    
      forget.getpwsd(req.params.user_email,function(err,rows){
        if (err) {
          res.json(err);
        }
        else {
          res.json(rows);
        }
  
      });
});
module.exports = router;