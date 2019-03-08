var db=require('../dbconnection');
var customer_invoice={
    addCustomerInvoice:function(item,callback){
            return db.query("insert into customer_invoice_tbl values(?,?,?,?,?,?,?,?)",[item.customer_email,item.customer_name,item.customer_mobileno,item.customer_billing_address,item.customer_shipping_address,item.category_id,item.product_id,item.customer_product_qty],callback);        
        },
    getAllCustomerInvoice:function(callback){
            return db.query("select * from customer_invoice_tbl",callback); 
        },
    getProductByCategoryId:function(category_id,callback){
            return db.query("select * from product_tbl where category_id=?",[category_id],callback);
        },
};
module.exports=customer_invoice;