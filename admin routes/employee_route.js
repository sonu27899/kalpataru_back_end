var employee=require('../admin models/employee_model');
var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
    employee.getAllEmployee(function(err,rows){
     if(err)
     {
     res.json(err);
     }
     else{
     res.json(rows);
     }
    });
  });

  router.get('/:employee_email',function(req,res,next){
    employee.getEmployeeById(req.params.employee_email,function(err,rows){
     if(err)
     {
     res.json(err);
     }
     else{
     res.json(rows);
     }
    });
  });

  
  router.delete('/:employee_email',function(req,res,next){
    employee.deleteEmployee(req.params.employee_email,function(err,rows){
     if(err)
     {
     res.json(err);
     }
     else{
     res.json(rows);
     }
    });
  });

  router.post('/',function(req,res,next){
    employee.addEmployee(req.body,function(err,rows){
     if(err)
     {
     res.json(err);
     }
     else{
     res.json(rows);
     }
    });
  });  

  router.put('/:employee_email',function(req,res,next){
    employee.updateEmployee(req.params.employee_email,req.body,function(err,rows){
     if(err)
     {
     res.json(err);
     }
     else{
     res.json(rows);
     }
    });
  });
  module.exports=router;