var express=require('express');
var app=express();
app.get('/',function(req,res){
	res.send("Hello World ");
	//res.sendFile(__dirname+"/index2.html");
});
app.use(express.static('public'));
app.post('/',function(req,res){
	res.send('Got a Post request');
})
var server =app.listen(8080,function(){
	var host=server.address().address;
	var port=server.address().port;
    console.log('Example app listening at %s %s',host,port);
});

