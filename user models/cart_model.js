var db=require('../dbconnection');
var cart={
    getAllProductCart:function(callback){
        return db.query("select * from cart_tbl",callback); 
    },
    getProductsById:function(fk_user_email,callback){
            return db.query("select * from cart_tbl where fk_user_email=?",[fk_user_email],callback);
    },       
    addToCart:function(item,callback){
        console.log(item);
          return db.query("insert into cart_tbl values(?,?,?,?,?)",[item.fk_product_id,item.size,item.qty,item.fk_user_email,item.payment_option],callback);        
        },
    deleteProduct:function(fk_user_email,fk_product_id,callback){
        console.log(fk_user_email,fk_product_id);
            return  db.query("delete from cart_tbl where fk_user_email=? AND fk_product_id=?",[fk_user_email,fk_product_id],callback);
        },
    updatePayment:function(fk_user_email,item,callback){
        console.log("username: "+fk_user_email+" item: "+item.payment_option);
        return db.query("update cart_tbl set payment_option=? where fk_user_email=?",[item.payment_option,fk_user_email],callback);
     },
     checkRepeatProduct:function(item,callback){
        return db.query("select * from cart_tbl where fk_user_email=? AND fk_product_id=?",[item.fk_user_email,item.fk_product_id],callback);
     }
    
};
module.exports=cart;