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
            return db.query("insert into product_tbl values(?,?,?,?,?,?,?,?,?,?,?,?,?,?)",[item.product_id,item.product_name,item.fk_category_id,item.product_price,item.product_colour,item.product_image,item.product_weight,item.product_warranty,item.product_material,item.product_Roomtype,item.product_height,item.product_width,item.product_depth,item.product_qty],callback);        
        },
    updateProduct:function(product_id,item,callback){
            return db.query("update product_tbl set product_name=?,fk_category_id=?,product_price=?,product_colour=?,product_image=?,product_weight=?,product_warranty=?,product_material=?,product_Roomtype=?,product_height=?,product_width=?,product_depth=?,product_qty=? where product_id=?",[item.product_name,item.fk_category_id,item.product_price,item.product_colour,item.product_image,item.product_weight,item.product_warranty,item.product_material,item.product_Roomtype,item.product_height,item.product_width,item.product_depth,item.product_qty,product_id],callback);
        },
    getProductByCategoryId:function(fk_category_id,callback){
        return db.query("select * from product_tbl where fk_category_id=?",[fk_category_id],callback);        
    },
    TopProductByName:function(callback){
        return db.query("select product_name, count(product_name) as attended from product_tbl group by product_name order by 2 desc limit 10",callback);
    },
    HighestProductPrice:function(callback){
        return db.query("select * FROM product_tbl ORDER BY product_price desc LIMIT 10 ",callback);
    }
    
};
module.exports=product;