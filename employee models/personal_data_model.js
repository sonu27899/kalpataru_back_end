var db=require('../dbconnection');
var profile={
    getProfileByEmail(employee_email,callback){
        return db.query("select * from employee_tbl where employee_email=?",[employee_email],callback);
    },
    updateProfile(employee_email,item,callback){
        return db.query("update employee_tbl set employee_name=?,employee_mobileno=?,employee_city=?,employee_gender=?,employee_address=? where employee_email=?",[item.employee_name,item.employee_mobileno,item.employee_city,item.employee_gender,item.employee_address,employee_email],callback);
    }
}
module.exports=profile;