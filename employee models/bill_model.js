var db=require('../dbconnection');
var bill={
    getBill(callback)
    {
        return db.query("select b.*,p.* from bill_tbl b,product_tbl p where b.product_id=p.product_id",callback);
    },
    getBillDetails(bill_id,callback){
        return db.query("select bd.*,p.* from bill_detail_tbl bd,product_tbl p where bd.fk_product_id=p.product_id And bd.fk_bill_id=?",[bill_id],callback);
    }
}
module.exports=bill;