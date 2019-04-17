var db=require('../dbconnection');

var leave={

    addleave:function(item,callback)
    {
        var leave_from_date=new Date(item.leave_from_date);
        var leave_status="Pending";
        return db.query("insert into leave_tbl(fk_employee_email,leave_msg,leave_days,leave_from_date,leave_status) values(?,?,?,?,?)",[item.employee_email,item.leave_msg,item.leave_days,leave_from_date,leave_status],callback);
    },
    getmyleave:function(employee_email,callback)
    {
        return db.query("select * from leave_tbl where fk_employee_email=?",[employee_email],callback);
    },
    getAllLeaveEmployee:function(callback){
        return db.query("select * from leave_tbl",callback); 
        },

        updateLeaveStatus:function(leave_id,callback){
            return db.query("update leave_tbl set leave_status='Accept' where leave_id=?",[leave_id],callback);
            },
        RejectLeaveStatus:function(leave_id,callback){
            return db.query("update leave_tbl set leave_status='Reject' where leave_id=?",[leave_id],callback);
           },
        getAllLeaveStatus:function(leave_status,callback){
            return db.query("select * from leave_tbl where leave_status='Accept'",[leave_status],callback); 
            },
        deleteLeaveReq:function(leave_id,callback){
            return  db.query("delete from leave_tbl where leave_id=?",[leave_id],callback);
            },
    
}

module.exports=leave;