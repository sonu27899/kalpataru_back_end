var db=require('../dbconnection');

var loan={
    
    getLoan(callback)
    {
        return db.query("select * from loan_tbl",callback);
    },
    getuserdata(employee_email,callback){
        return db.query("select * from employee_tbl where employee_email=?",[employee_email],callback);
    },
    getLoanDetails(loan_id,callback){
        return db.query("select l.*,e.* from loan_tbl l,employee_tbl e where l.fk_employee_email=e.employee_email And l.loan_id=?",[loan_id],callback);
    },
    addLoanNotification:function(item,callback){
        
        let loan_status="Pending";
        var rejected_reason="";
        var issued_date=new Date(item.loan_issued_date);
        var last_installment_date=new Date(item.last_installment_date);
        
        return db.query("insert into loan_tbl (loan_amount,fk_employee_email,loan_issued_date,last_installment_date,loan_status,loan_reason,loan_months,rejected_reason,pay_per_month) values(?,?,?,?,?,?,?,?,?)",[item.loan_amount,item.fk_employee_email,issued_date,last_installment_date,loan_status,item.loan_reason,item.loan_months,rejected_reason,item.pay_per_month],callback);        
    },
    getmyloan(employee_email,callback)
    {
        return db.query("select * from loan_tbl where fk_employee_email=?",[employee_email],callback);
    }
}
module.exports=loan;