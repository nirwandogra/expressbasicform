var express    = require("express");
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'address_book'
});
var app = express();

connection.connect(function(err){
if(!err) {
    console.log("Database is connected ... \n\n");  
} else {
    console.log("Error connecting database ... \n\n");  
}
});
var quer="INSERT INTO `address_book`.`Info` (`username`, `email`) VALUES ('ayush', 'ayush@gmail.com');";
//var quer="Insert INTO 'address_book' .  Info('username' , 'email') Values('gupta','ayush@gmail.com')"; 

var result =connection.query(quer);
//console.log(result);
console.log("inserted into the database");
app.get("/",function(req,res){
connection.query('SELECT * from Info', function(err, rows, fields) 
{
connection.end();
  if (!err)
  {
      console.log('The solution is: ', rows);
   }
  else
    console.log('Error while performing Query.');
  });
  res.send('Good Bye');
});

app.listen(8080);
