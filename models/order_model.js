var db=require('../dbconnection');
var order={
     getAllOrder:function(callback){
        return db.query("select * from order_tbl",callback); 
        },
        deleteOrder:function(order_id,callback){
                return  db.query("delete from order_tbl where order_id=?",[order_id],callback);
            }
};
module.exports=order;