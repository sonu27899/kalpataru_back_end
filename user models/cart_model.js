var db=require('../dbconnection');
var cart={
    getAllProductCart:function(callback){
        return db.query("select * from cart_tbl",callback); 
    },
    getProductsById:function(fk_user_email,callback){
            return db.query("select * from cart_tbl where fk_user_email=?",[fk_user_email],callback);
    },       
    addToCart:function(item,callback){
        // console.log(item);
          return db.query("insert into cart_tbl values(?,?,?,?,?,?)",[item.fk_product_id,item.qty,item.fk_user_email,item.payment_option,item.fk_category_id,item.product_price],callback);        
        },
    deleteProduct:function(fk_user_email,fk_product_id,callback){
        // console.log(fk_user_email,fk_product_id);
            return  db.query("delete from cart_tbl where fk_user_email=? AND fk_product_id=?",[fk_user_email,fk_product_id],callback);
        },
    updatePayment:function(fk_user_email,item,callback){
        // console.log("username: "+fk_user_email+" item: "+item.payment_option);
        return db.query("update cart_tbl set payment_option=? where fk_user_email=?",[item.payment_option,fk_user_email],callback);
     },
     checkRepeatProduct:function(item,callback){
        return db.query("select * from cart_tbl where fk_user_email=? AND fk_product_id=?",[item.fk_user_email,item.fk_product_id],callback);
     },
     updateqty:function(item1,item,item2,element,callback){
        //  console.log(item,item1,item2);
        // console.log(element);
        return db.query("update cart_tbl set qty=? where fk_user_email=? AND fk_product_id=?",[item,item1,item2],callback);
     }
    
};
module.exports=cart;