var forget = require('../employee models/worker_model')
var express = require('express');
var router = express.Router();

router.get('/:email', function (req, res, next) {
    
      forget.getpassword(req.params.email,function(err,rows){
        if (err) {
          res.json(err);
        }
        else {
          res.json(rows);
        }
  
      });
});
module.exports = router;