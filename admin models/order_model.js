var db=require('../dbconnection');
var order={

     getAllOrder:function(callback){
        return db.query("select * from order_tbl",callback); 
        },
        deleteOrder:function(order_id,callback){
                return  db.query("delete from order_tbl where order_id=?",[order_id],callback);
            },

    addOrder:function(item,callback){
        var order_date=new Date();
        // console.log(order_date);
        return db.query("insert into order_tbl (order_id,order_date,order_amount,fk_product_id,fk_user_email,delievery_assign,order_status) values(?,?,?,?,?,?,?)",[,order_date,item.order_amount,item.fk_product_id,item.fk_user_email,"",'1'],callback);        
    },
   
};
module.exports=order;