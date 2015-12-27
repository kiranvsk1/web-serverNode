var express = require('express');
var PORT = 3000;
var app = express();
var middleWare= {
  requireAuthentication : function (req,res,next) {
    // body...
    console.log("Private route hit");
    next();
  },
  logger:function (req,res,next) {
    var d = new Date();
    console.log("Request : on "+d+" "+req.method+" "+req.originalUrl);
    next();
  }
}
app.use(middleWare.logger);
app.get('/about',middleWare.requireAuthentication,function (req,res) {
  res.send('Hello World!');
})
app.use(express.static(__dirname+"/public"));

app.listen(PORT,function () {
  // body...
  console.log("Server is running on port:"+PORT+"!");
});
