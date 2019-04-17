var db=require('../dbconnection');
var order={

     getAllOrder:function(callback){
        return db.query("select * from order_tbl",callback); 
        },
        deleteOrder:function(order_id,callback){
                return  db.query("delete from order_tbl where order_id=?",[order_id],callback);
            },

    addOrder:function(item,callback){
        return db.query("insert into order_tbl values(?,?,?,?,?,?)",[item.order_id,item.order_date,item.order_amount,item.fk_product_id,item.fk_category_id,item.order_status],callback);        
    },
    getBillDetails(order_id,callback){
        return db.query("select od.*,p.*,c.* from order_details_tbl od,product_tbl p,category_tbl c where od.fk_category_id=c.category_id And od.fk_product_id=p.product_id And od.fk_order_id=?",[order_id],callback);
    },
   
};
module.exports=order;