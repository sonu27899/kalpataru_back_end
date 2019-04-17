var db=require('../dbconnection');
var bill={
    getBill(callback)
    {

        return db.query("select * from bill_tbl",callback);
        //return db.query("select b.*,p.* from bill_tbl b,product_tbl p where b.fk_product_id=p.product_id",callback);
    },
    // getBillDetails(order_id,callback){
    //     return db.query("select od.*,p.*,c.* from order_details_tbl od,product_tbl p,category_tbl c where od.fk_category_id=c.category_id And od.fk_product_id=p.product_id And od.fk_order_id=?",[order_id],callback);
    // },
    getOrderDetails(order_id,callback)
    {
        console.log(order_id);
        return db.query("select od.*,p.*,c.* from order_details_tbl od,product_tbl p,category_tbl c where od.fk_product_id=p.product_id And od.fk_category_id=c.category_id And od.fk_order_id=?",[order_id],callback);
    }

}
module.exports=bill;