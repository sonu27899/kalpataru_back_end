var db=require('../dbconnection');
var order={
    getOrderDetailById:function(order_id,callback){
            return db.query("select * from order_details_tbl where fk_order_id=?",[order_id],callback);
    },
    getOrderDetail:function(callback){
        return db.query("select * from order_details_tbl ",callback);
    },
    getOrderById:function(fk_user_email,callback){
        return db.query("select * from order_tbl where fk_user_email=?",[fk_user_email],callback);
    },
    getOrder:function(callback){
        return db.query("select * from order_tbl ",callback);
    },
    addToOrder:function(item,callback){
        var order_date=Date.now();
          return db.query("insert into order_tbl values(?,?,?,?,?,?)",[,order_date,item.order_amount,item.fk_user_email,item.delievery_assign,'1'],callback);        
    },
    addToOrderDetails:function(item,callback){
        console.log(item);
        // return db.query("insert into order_details_tbl values (?,?,?,?,?,?)",[,item.fk_order_id,item.fk_product_id,item.fk_category_id,item.fk_product_price,item.product_qty],callback);        
        return db.query("insert into order_details_tbl values(?,?,?,?,?,?)",[,item.fk_order_id,item.fk_product_id,item.category_id,item.product_price,item.product_qty],callback);        

    }
    
};
module.exports=order;