var express = require('express');
var app = express();
app.use(express.static('.'));
var port = process.env.PORT || 3000;
console.log('Listening on port', port);
app.listen(port);
