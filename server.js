var express = require('express');
var path = require('path');
var React = require('react');
var fs = require('fs');

var app = express();
app.use(express.static(__dirname + '/public'));

var PORT = process.env.PORT || 8080;
var server = app.listen(PORT);

console.log("Server listening on port ", PORT);
