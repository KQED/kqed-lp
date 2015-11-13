var express = require('express');
var app = express();
var webpack = require('webpack');
var config = require('./webpack.config.dev');
var compiler = webpack(config);
var path = require('path');

//enables webpack middleware
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true
}));

app.use(require('webpack-hot-middleware')(compiler));

//this enables jsx to be transpiled by node
require('node-jsx').install();
var renderer = require('react-engine');
var engine = renderer.server.create();

app.engine('.jsx', engine);
//can not have multiple templates in views folder (right now just one)
app.set('views', __dirname + '/public/views');
app.set('view engine', 'jsx');
app.set('view', renderer.expressView);



var index = function(req, res) {
  res.render('index');
};
//for now, on any path, let index.js resolve it
app.get('', index);

//serve up custom css
app.get('/styles.css', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/styles.css'));
});

var PORT = process.env.PORT || 8080;
var server = app.listen(PORT);

console.log("Server listening on port ", PORT);
