var db=require('../dbconnection');
var order={
    addOrder:function(item,callback){
        return db.query("insert into order_tbl values(?,?,?,?,?,?)",[item.order_id,item.order_date,item.order_amount,item.fk_product_id,item.fk_category_id,item.order_status],callback);        
    },
     getAllOrder:function(callback){
        return db.query("select * from order_tbl",callback); 
        }
};
module.exports=order;