const path=require("path");
var express=require("express");
var app=express();
const port = process.env.PORT || 8080;
app.get('/', function(req, res, next) { res.sendFile(path.join(__dirname, '/index.html'))
});


app.get('/api/whoami',function(req,res){
  var headerParsed=getParse(req);
  res.json(headerParsed);
});


app.listen(port,function(){
  console.log('Server is listening port:'+port);
});

function getParse(request){
  return {
    ipaddress:getIPAddr(request.connection.remoteAddress),
    language:getLang(request.headers["accept-language"]),
    software:getSoft(request.headers["user-agent"])
  }
}
function getIPAddr(remoteAddress){
  if(remoteAddress.indexOf(':')>=0) return remoteAddress.split(':').reverse()[0]; 
  else return remoteAddress;
}

function getLang(language){
  return language.split(',')[0];
}

function getSoft(agent){
  return agent.split(/[\(\)]/)[1];
}
 
