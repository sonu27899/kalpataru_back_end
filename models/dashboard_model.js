var db=require('../dbconnection'); 

var dashboard={
    TopProductByName:function(callback){
        return db.query("select product_name, count(product_name) as attended from product_tbl group by product_name order by 2 desc limit 10",callback);
    },
    HighestProductPrice:function(callback){
        return db.query("select * FROM product_tbl ORDER BY product_price desc LIMIT 10 ",callback);
    },
    TopSellingProducts:function(callback){
        return db.query("select  count(product_id) as attended from bill_tbl ",callback);
    },
    CountUser:function(callback){
        return db.query("select  count(user_email) as User from user_tbl ",callback);
    },
    CountProduct:function(callback){
        return db.query("select  count(product_id) as Product from product_tbl ",callback);
    },
    ProductPrizeSumation:function(callback){
        return db.query("select  SUM(product_price) as ProductPrize from product_tbl ",callback);
    },
    getUserDetailsByorder:function(callback){
        return db.query("select p.*,u.*,o.* from product_tbl p,user_tbl u,order_tbl o where u.user_email=o.fk_user_email and p.product_id=o.fk_product_id",callback);
    },
   
};
module.exports=dashboard;