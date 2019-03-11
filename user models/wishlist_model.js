var db=require('../dbconnection');
var cart={
    getAllProductwishlist:function(callback){
        return db.query("select * from wishlist_tbl",callback); 
    },
    getProductsById:function(fk_user_email,callback){
            return db.query("select * from wishlist_tbl where fk_user_email=?",[fk_user_email],callback);
    },       
    addToCart:function(item,callback){
          return db.query("insert into wishlist_tbl values(?,?)",[item.fk_product_id,item.fk_user_email],callback);        
        },
    deleteProduct:function(fk_user_email,item,callback){
            return  db.query("delete from wishlist_tbl where fk_user_email=? AND fk_product_id=?",[fk_user_email,item.fk_product_id],callback);
        }
    
};
module.exports=cart;