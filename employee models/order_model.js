var db=require('../dbconnection');
var order={
    getAllOrder(callback)
    {
        return db.query("select u.*,o.* from user_tbl u,order_tbl o where o.fk_user_email=u.user_email",callback);
    },
    getAllWork:function(employee_email,callback)
    {
        return db.query("select o.*,u.* from order_tbl o,user_tbl u where  o.delievery_assign=? AND o.fk_user_email=u.user_email  ",[employee_email],callback);
        
    },

    updateStatus:function(item,order_id,callback){
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
        return db.query("update order_tbl set order_status=?,delievery_assign=? where order_id=?",[this.status,item.delievery_assign,order_id],callback);
        
    },
    getAllDelieveryBoy(callback)
    {
        return db.query("select * from employee_tbl where employee_designation='Delievery_Boy'",callback);
    }
}
module.exports=order;