var express = require('express');
var React = require('react');
var ReactDOMStream = require('react-dom-stream/server');
var App = React.createFactory(require('./client/App'));

var app = express();
app.use(express.static(__dirname + '/public'));

require('node-jsx').install();

var PORT = process.env.PORT || 8080;
var server = app.listen(PORT);

console.log("Server listening on port ", PORT);
