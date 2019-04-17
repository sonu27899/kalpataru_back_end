var db=require('../dbconnection');
var login={
    
    getLoginByEmailAndPassword:function(item,callback){ 
            return db.query("select * from user_tbl where user_email=? And user_password=?",[item.user_email,item.user_password],callback);
        },
    getLoginByEmail:function(user_email,callback){
            return db.query("select * from user_tbl where user_email=?",[user_email],callback);
        },    
        
    loginByEmail:function(item,callback){
        return db.query("select * from user_tbl where user_email=? And user_password=?",[item.user_email,item.user_password],callback);
    },
    
};
module.exports=login;