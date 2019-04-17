var db=require('../dbconnection');
var colour={
    getAllColour:function(callback){
        return db.query("select * from colour_tbl",callback); 
        },
    
};
module.exports=colour;