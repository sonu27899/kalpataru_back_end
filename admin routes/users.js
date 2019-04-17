var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.put('/:user_email',function(req,res,next){
  user.updateUserPassword(req.params.user_email,req.body,function(err,rows){
   if(err)
   {
   res.json(err);
   }
   else{
   res.json(rows);
   }
  });
});

module.exports = router;
