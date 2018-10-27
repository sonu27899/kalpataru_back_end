var db=require('../dbconnection');
var category={
    getAllCategory:function(callback){
        return db.query("select * from category_tbl",callback); 
        },
    getCategoryById:function(category_id,callback){
            return db.query("select * from category_tbl where category_id=?",[category_id],callback);
        },
    addCategory:function(item,callback){
            return db.query("insert into category_tbl values(?,?)",[item.category_id,item.category_name],callback);        
        },
    deleteCategory:function(category_id,callback){
            return  db.query("delete from category_tbl where category_id=?",[category_id],callback);
        },
    updateCategory:function(category_id,item,callback){
            return db.query("update category_tbl set category_name=? where category_id=?",[item.category_name,category_id],callback);
        }
    
};
module.exports=category;