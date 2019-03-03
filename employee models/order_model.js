var db=require('../dbconnection');
var order={
    getAllOrder(callback)
    {
        return db.query("select u.*,o.* from user_tbl u,order_tbl o where o.fk_user_email=u.user_email",callback);
    },
    updateStatus:function(item,order_id,callback){
        console.log(item);
        console.log(order_id);
        var status=Number;
        if(item.order_status==1)
        {
            this.status=2;
        }
        else if(item.order_status==2)
        {
            this.status=3;
        }
        else if(item.order_status==3)
        {
            this.status=4
        }
        return db.query("update order_tbl set order_status=? where order_id=?",[this.status,order_id],callback);
    },
}
module.exports=order;