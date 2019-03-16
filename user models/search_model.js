var db=require('../dbconnection');
var search={
    
    getSearchedProduct:function(word,callback){
        var name='%'+word+'%';
            return db.query("select product_id, product_name from product_tbl where product_name like ? ",[name],callback);
    },
    getSearchedProductBlank:function(callback){
            return db.query("select product_id, product_name from product_tbl where product_name like '%%' ",callback);
    }
};
module.exports=search;