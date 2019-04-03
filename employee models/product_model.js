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
        getImageById(product_id,callback)
        {
            return db.query("select p.product_image,pi.* from product_tbl p,product_image_tbl pi where p.product_id=pi.fk_product_id AND p.product_id=?",[product_id],callback);
        },
    addImage:function(item,filename,callback)
    {
         return db.query("insert into product_image_tbl(fk_product_id,product_image2) values(?,?)",[item.fk_product_id,filename],callback)
            
    },
    updateimage:function(product_id,item,filename,callback)
    {
            
            let a=item.location;
            if(a=='1')
            {
                return db.query("update product_tbl set product_image=? where product_id=?",[filename,product_id],callback);
            }
            else if(a=='2')
            {
                return db.query("update product_image_tbl set product_image2=? where fk_product_id=?",[filename,product_id],callback);
            }
            else if(a=='3')
            {
                return db.query("update product_image_tbl set product_image3=? where fk_product_id=?",[filename,product_id],callback);
            }

        
    }
    
};
module.exports=product;