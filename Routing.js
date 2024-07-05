var express = require('express');
var app = express();

app.get('/ak', function(req, res) {
    res.send("hello I am Akhila");
});

app.get('/', function(req, res) {
    res.send("<h1>Hello I am Akhila. Here I am using HTML</h1>");
});

app.listen(8080, function() {
    console.log('Server started on port 3000');
});
