var mysql=require('mysql');
 var connection=mysql.createPool({
 
host:'localhost',
 user:'id9322002_kalpataru',
 password:'kalpataru',
 database:'id9322002_kalpataru_database'
 
});
 module.exports=connection;