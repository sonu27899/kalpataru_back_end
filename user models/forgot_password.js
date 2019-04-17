var db=require('../dbconnection');
var forget={

    getpwsd:function(user_email,callback)
    {
        return db.query('Select * from user_tbl where user_email=?',[user_email],callback);
    }
    }
    module.exports=forget;