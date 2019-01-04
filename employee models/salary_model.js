var db=require('../dbconnection');
var salary={
    getAllEmp(callback){
        return db.query("select * from employee_tbl",callback);
    },
    getAllPendingSalary(callback)
    {
        let str='Pending';
        return db.query("select * from employee_tbl where salary_status=?",str,callback);
    },
    getAllDoneSalary(callback)
    {
        let str='Done';
        return db.query("select * from employee_tbl where salary_status=?",str,callback);
    }
}
module.exports=salary;