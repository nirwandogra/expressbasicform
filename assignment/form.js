var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser());
app.get('/', function(req, res){
var html = '<form action="/" method="post">' +
               'Enter your name:' +
               '<input type="text" name="userName" placeholder="" />' +
               '<br>' + 'Enter your email:' + '<input type="text" name="email" placeholder="" />' +
               '<br>' +
               '<button type="submit">Submit</button>' +
            '</form>';
               
  res.send(html);
});
var fs = require('fs');

function validateEmail(email) 
{
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}
app.post('/', function(req, res){
  var userName = req.body.userName;
  var email = req.body.email;
  var html1 = 'Validation Successful <br>';
  var html2 = 'Invalid Email id Or Username <br>'; 
  if(validateEmail(email)==1 && userName!='')
  {
     res.send(html1);
     fs.writeFile("test.csv",userName+','+email, function(err) {
     if(err) {
        return console.log(err);
     }
    console.log("The file was saved!");
});   
  }
  else 
  {
     res.send(html2); 
  }  
  
});

app.listen(8080);
console.log('Listening on port 8080 ');