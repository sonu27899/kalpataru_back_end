var product=require('../employee models/product_model');

var express = require('express');
var router = express.Router();
var multer = require('multer');
var path = require('path');

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images/product_images')
  },
  filename: (req, file, cb) => {
    x = file.fieldname + '-' + Date.now() + path.extname(file.originalname);
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
});
var upload = multer({ storage: storage });

router.get('/:product_id', function (req, res, next) {
    product.getImageById(req.params.product_id,function (err, rows) {
      if (err) {
        res.json(err);
      }
      else {
        res.json(rows);
      }
    });
  });
module.exports=router;