var db=require('../dbconnection');
var cart={
    getAllProductwishlist:function(callback){
        return db.query("select * from wishlist_tbl",callback); 
    },
    getProductsById:function(user_name,callback){
            return db.query("select * from wishlist_tbl where user_name=?",[user_name],callback);
    },       
    addToCart:function(item,callback){
          return db.query("insert into wishlist_tbl values(?,?)",[item.product_id,item.user_name],callback);        
        },
    deleteProduct:function(user_name,item,callback){
            return  db.query("delete from wishlist_tbl where user_name=? AND product_id=?",[user_name,item.product_id],callback);
        }
    
};
module.exports=cart;