var db=require('../dbconnection');
var customer_invoice={
    addCustomerInvoice:function(item,callback){
            return db.query("insert into customer_invoice_tbl values(?,?,?,?,?,?,?,?,?)",[item.fk_user_email,item.fk_user_name,item.fk_user_mobileno,item.fk_user_address,item.user_shipping_address,item.fk_category_id,item.fk_product_id,item.fk_product_qty,item.fk_product_price],callback);        
        },
    getAllCustomerInvoice:function(callback){
            return db.query("select * from customer_invoice_tbl",callback); 
        },
    getProductByCategoryId:function(fk_category_id,callback){
            return db.query("select * from product_tbl where fk_category_id=?",[fk_category_id],callback);
        },
};
module.exports=customer_invoice;