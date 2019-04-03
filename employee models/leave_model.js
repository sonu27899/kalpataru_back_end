var db=require('../dbconnection');
status="pending";
var leave={

        
    getAllLeaveEmployee:function(callback){
        return db.query("select * from leave_management",callback); 
        },
    addLeaveRecord:function(item,callback){
            return db.query("insert into leave_management values(?,?,?,?,?,?,?,?)",[item.employee_name,item.leave_id,item.leave_msg,item.leave_days,item.leave_from_date,item.leave_to_date,item.leave_name,status],callback);        
        }
    
    
};
module.exports=leave;