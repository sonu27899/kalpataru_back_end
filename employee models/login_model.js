var db=require('../dbconnection');
var login={
    getLogin(employee_email,item,callback){
        return db.query("select * from employee_tbl where employee_email=? And employee_password=?",[employee_email,item.employee_password],callback);
    },
}
module.exports=login;