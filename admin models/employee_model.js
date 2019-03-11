var db=require('../dbconnection');
var employee={

    
    getAllEmployee:function(callback){
        return db.query("select * from employee_tbl",callback); 
        },
    getEmployeeById:function(employee_email,callback){
            return db.query("select * from employee_tbl where employee_email=?",[employee_email],callback);
        },
    deleteEmployee:function(employee_email,callback){
            return  db.query("delete from employee_tbl where employee_email=?",[employee_email],callback);
        },
    addEmployee:function(item,callback){
            return db.query("insert into employee_tbl values(?,?,?,?,?,?,?,?,?,?,?)",[item.employee_email,item.employee_password,item.employee_name,item.employee_joining_date,item.employee_salary,item.employee_designation,item.employee_mobileno,item.employee_city,item.employee_gender,item.employee_address,item.salary_status],callback);        
        },
    updateEmployee:function(employee_email,item,callback){
            return db.query("update employee_tbl set employee_password=?,employee_name=?,employee_joining_date=?,employee_salary=?,employee_designation=?,employee_mobileno=?,employee_city=?,employee_gender=?,employee_address=?,employee_type=? where employee_email=?",[item.employee_password,item.employee_name,item.employee_joining_date,item.employee_salary,item.employee_designation,item.employee_mobileno,item.employee_city,item.employee_gender,item.employee_address,item.employee_type,employee_email],callback);
        }
    
};
module.exports=employee;