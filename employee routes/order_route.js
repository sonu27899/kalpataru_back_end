var order_mode = require('../employee models/order_model');
var express = require('express');
var router = express.Router();
router.get("/", function(req, res, next) {
    order_mode.getAllOrder(function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  });
  router.put('/:order_id',function(req,res,next){
    order_mode.updateStatus(req.body,req.params.order_id,function(err,row){
        if (err) {
            res.json(err);
          } else {
            res.json(row);
          }
    });
});
  module.exports = router;