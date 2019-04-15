var db=require('../dbconnection');

var forget={

    getpassword:function(email,callback)
    {
        return db.query('Select * from employee_tbl where employee_email=?',[email],callback);
    }    
}
module.exports=forget;