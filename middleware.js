var middleWare= {
  requireAuthentication : function (req,res,next) {
    console.log("Private route hit");
    next();
  },
  logger:function (req,res,next) {
    var d = new Date();
    console.log("Request : on "+d+" "+req.method+" "+req.originalUrl);
    next();
  }
}

module.exports = middleWare;
