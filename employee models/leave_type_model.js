var db=require('../dbconnection');
var leave_type={

    
    getAllLeaveType:function(callback){
        return db.query("select * from leave_type_tbl",callback); 
        }
    
};
module.exports=leave_type;