var mysql=require('mysql');
 var connection=mysql.createPool({
 
host:'sql12.freesqldatabase.com',
 user:'sql12288390',
 password:'IITgrg9LQD',
 database:'sql12288390'
 
});
 module.exports=connection;