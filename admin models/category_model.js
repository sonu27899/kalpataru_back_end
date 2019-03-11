var db=require('../dbconnection');
var category={
    getAllCategory:function(callback){
        return db.query("select * from category_tbl",callback); 
        },
    getCategoryById:function(category_id,callback){
            return db.query("select * from category_tbl where category_id=?",[category_id],callback);
        },
       
    addCategory:function(item,callback){
            return db.query("insert into category_tbl values(?,?)",[null,item.category_name],callback);        
        },
    deleteCategory:function(category_id,callback){
            return  db.query("delete from category_tbl where category_id=?",[category_id],callback);
        },
    updateCategory:function(item,callback){
            return db.query("update category_tbl set category_name=? where category_id=?",[item.category_name,item.category_id],callback);
            console.log(item);
        },
    getCategoryByName:function(category_name,callback){
            return db.query("select * from category_tbl where category_name=?",[category_name],callback);
        }
    
};
module.exports=category;