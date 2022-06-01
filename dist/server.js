var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 80;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var router = require('./routes');
app.use('/api', router);
app.listen(port);
console.log(`API listening port: ${port}`);
//# sourceMappingURL=server.js.map
