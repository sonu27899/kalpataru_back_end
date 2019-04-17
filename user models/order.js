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
          return db.query("insert into order_tbl values(?,?,?,?,?,?)",[,order_date,item.order_amount,item.fk_user_email," ",'1'],callback);        
    },
    addToOrderDetails:function(item,callback){
        // console.log(item);
        var value=[];
        for(let i=0;i<item.length;i++){
            value[i]=[item[i].fk_order_id,item[i].fk_product_id,item[i].fk_category_id,item[i].fk_product_price,item[i].product_qty];
        }
        console.log(value);
        // return db.query("insert into order_details_tbl values (?,?,?,?,?,?)",[,item.fk_order_id,item.fk_product_id,item.fk_category_id,item.fk_product_price,item.product_qty],callback);        
        return db.query("insert into order_details_tbl(fk_order_id,fk_product_id,fk_category_id,fk_product_price,qty) values ?",[value],callback);        

    },    
    // UpdateProductQtyForOrder:function(product_id,product_qty,callback){
    //         return db.query("update product_tbl set product_qty = ? - 2 where product_id = ?",[product_qty,product_id],callback);
    // },
    UpdateProductQtyForOrder:function(product_id,product_qty,element,callback){
        //  console.log(item,item1,item2);
        // console.log(element);
        return db.query("update product_tbl set product_qty = product_qty-? where product_id=?",[product_qty,product_id],callback);
     }
    
};
module.exports=order;