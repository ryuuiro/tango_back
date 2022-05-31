var express = require('express');
var app = express();

var port = process.env.PORT || 80;

app.get('/api/fibonacci', function(req, res) {

});


app.listen(port);
console.log('API listening port: ' + port);
