var db=require('../dbconnection'); 

var loan_delete={
    
    getAllLoanReq:function(callback){
        return db.query("select * from loan_tbl",callback); 
        },
    updateLoanStatus:function(loan_id,callback){
            return db.query("update loan_tbl set loan_status='accept' where loan_id=?",[loan_id],callback);
        },
    updateLoanStatusForReject:function(loan_id,callback){
            return db.query("update loan_tbl set loan_status='reject' where loan_id=?",[loan_id],callback);
        },
   deleteLoanReq:function(loan_id,callback){
                return  db.query("delete from loan_tbl where loan_id=?",[loan_id],callback);
       },
   deleteLoanFromUpdate:function(loan_status,callback){
                return  db.query("delete from loan_tbl where loan_status='accept'",[loan_status],callback);
        },
    getAllLoanStatus:function(loan_status,callback){
            return db.query("select * from loan_tbl where loan_status='accept'",[loan_status],callback); 
        },
    updateRejectedLoanReason:function(item,callback){
        console.log(item);
        return db.query("update loan_tbl set rejected_reason=? where loan_id=?",[item.rejected_reason,item.loan_id],callback);
        
    },
    
};
module.exports=loan_delete;