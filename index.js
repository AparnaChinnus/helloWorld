var http = require('http');
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require("body-parser");
var port=process.env.PORT || 7000;
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/web/app.html'));
});
app.set('views', path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname, 'web')));
// app.get('/asset', function (req, res){
//
//   });

app.listen(port);

    console.log('Example app listening at ' + port);
