var e=require('express');
var app=e();
app.get("/ch",function(req,res){
    res.send("this is hello world");
})
app.listen(3000);