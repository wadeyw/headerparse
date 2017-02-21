
var express=require("express");
var app=express();
var PORT=8080;

app.get('/api/whoami',function(req,res){
  var headerParsed=getParse(req);
  res.json(headerParsed);
});


app.listen(PORT,function(){
  console.log('Server is listening port:'+PORT);
});

function getParse(request){
  return {
    ipaddress:getIPAddr(request.connection.remoteAddress),
    language:getLang(request.headers["accept-language"]),
    software:getSoft(request.headers["user-agent"])
  }
}
  
function getIPAddr(remoteAddress){
  return remoteAddress;
}

function getLang(language){
  return language;
}

function getSoft(agent){
  return agent;
}
