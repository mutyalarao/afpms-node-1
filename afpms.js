var url = require("url")
var path = require("path");
var http = require("http");
var handler = require('./lib/handler');

/*var express = require("express");
 app = new express();
var router = require('./routes/index');
router(app);

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.set("html",require('ejs').renderFile);

app.listen(3000);*/

//var server = http.createServer(handler.route(this.request,this.response));
var server = http.createServer(function(req,res){handler.route(req,res);});
server.listen(3000,function(req,res){
	console.log('Yay!');});
