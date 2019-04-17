var db=require('../dbconnection');
var signup={
    
    getAllSignupRecord:function(callback){
        return db.query("select * from user_tbl",callback); 
        },
    addUserinformation:function(item,callback){
        return db.query("insert into user_tbl values(?,?,?,?,?,?,?)",[item.user_email,item.user_password,item.user_name,item.user_mobileno,item.user_city,item.user_gender,item.user_address],callback);
     },
     getUserByType:function(user_type,callback){
        return db.query("select * from user_tbl where user_type=?",[user_type],callback); 
        }
};
module.exports=signup;