var db=require('../dbconnection');
var product={

    
    getAllProduct:function(callback){
        return db.query("select * from product_tbl",callback); 
        },
    getProductById:function(product_id,callback){
            return db.query("select * from product_tbl where product_id=?",[product_id],callback);
        },
    deleteProduct:function(product_id,callback){
            return  db.query("delete from product_tbl where product_id=?",[product_id],callback);
        },
    addProduct:function(item,callback){
            return db.query("insert into product_tbl values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",[item.product_id,item.product_name,item.category_id,item.product_price,item.product_colour,item.product_image,item.product_weight,item.product_warranty,item.product_material,item.product_Roomtype,item.product_height,item.product_width,item.product_depth,item.product_qty,item.product_soh],callback);        
        },
    updateProduct:function(product_id,item,callback){
            return db.query("update product_tbl set product_name=?,category_id=?,product_price=?,product_colour=?,product_image=?,product_weight=?,product_warranty=?,product_material=?,product_Roomtype=?,product_height=?,product_width=?,product_depth=?,product_qty=?,product_soh=? where product_id=?",[item.product_name,item.category_id,item.product_price,item.product_colour,item.product_image,item.product_weight,item.product_warranty,item.product_material,item.product_Roomtype,item.product_height,item.product_width,item.product_depth,item.product_qty,item.product_soh,product_id],callback);
        }
    
};
module.exports=product;