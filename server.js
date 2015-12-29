var express = require('express');
var middleWare = require('./middleware');
var PORT = 3000;
var app = express();

app.use(middleWare.logger);
app.get('/about',middleWare.requireAuthentication,function (req,res) {
  res.send('Hello World!');
})
app.use(express.static(__dirname+"/public"));

app.listen(PORT,function () {
  // body...
  console.log("Server is running on port:"+PORT+"!");
});
