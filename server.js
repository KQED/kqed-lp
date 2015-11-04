var express = require('express');
var app = express();
// var React = require('react');
// var ReactDOMStream = require('react-dom-stream/server');
// var App = React.createFactory(require('./client/App'));
require('node-jsx').install();
var renderer = require('react-engine');
var engine = renderer.server.create();

app.engine('.jsx', engine);
app.set('views', __dirname + '/public/views');
app.set('view engine', 'jsx');
app.set('view', renderer.expressView);

app.use(express.static(__dirname + '/public'));

var index = function(req, res) {
  res.render('index');
};

app.get('', index);

var PORT = process.env.PORT || 8080;
var server = app.listen(PORT);

console.log("Server listening on port ", PORT);
