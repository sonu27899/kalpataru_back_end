var db=require('../dbconnection');
var user={

    
    getAllUser:function(callback){
        return db.query("select * from user_tbl",callback); 
        },
    getUserByEmail:function(user_email,callback){
            return db.query("select * from user_tbl where user_email=?",[user_email],callback);
        },
    deleteUser:function(user_email,callback){
            return  db.query("delete from user_tbl where user_email=?",[user_email],callback);
        },
    updateUser:function(user_email,item,callback){
            return db.query("update user_tbl set user_password=?,user_name=?,user_mobileno=?,user_city=?,user_gender=?,user_address=?,user_type=? where user_email=?",[item.user_password,item.user_name,item.user_mobileno,item.user_city,item.user_gender,item.user_address,item.user_type,user_email],callback);
        }
    
};
module.exports=user;