var db=require('../dbconnection');
var leaveManagement={

        
    getAllLeaveEmployee:function(callback){
        return db.query("select * from leave_management",callback); 
        },
    updateLeaveStatus:function(leave_id,callback){
        return db.query("update leave_management set leave_status='accept' where leave_id=?",[leave_id],callback);
        },
    getAllLeaveStatus:function(leave_status,callback){
        return db.query("select * from leave_management where leave_status='accept'",[leave_status],callback); 
        },
    deleteLeaveReq:function(leave_id,callback){
        return  db.query("delete from leave_management where leave_id=?",[leave_id],callback);
        },
};
module.exports=leaveManagement;