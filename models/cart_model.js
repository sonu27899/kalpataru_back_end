var db=require('../dbconnection');
var cart={
    getAllProductCart:function(callback){
        return db.query("select * from cart_tbl",callback); 
    },
    getProductsById:function(user_name,callback){
            return db.query("select * from cart_tbl where user_name=?",[user_name],callback);
    },       
    addToCart:function(item,callback){
          return db.query("insert into cart_tbl values(?,?,?,?,?,?)",[item.product_id,item.size,item.quantity,item.user_email,item.payment_option,0],callback);        
        },
    deleteProduct:function(user_name,product_id,callback){
        console.log(product_id,user_name);
            return  db.query("delete from cart_tbl where user_name=? AND product_id=?",[user_name,product_id],callback);
        },
    updatePayment:function(user_name,item,callback){
        console.log("username: "+user_name+" item: "+item);
        return db.query("update cart_tbl set payment_option=? where user_name=?",[item.payment_option,user_name],callback);
     }
    
};
module.exports=cart;