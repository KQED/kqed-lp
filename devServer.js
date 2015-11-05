var express = require('express');
var app = express();
var webpack = require('webpack');
var config = require('./webpack.config.dev');
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true
}));

app.use(require('webpack-hot-middleware')(compiler));

require('node-jsx').install();
var renderer = require('react-engine');
var engine = renderer.server.create();

app.engine('.jsx', engine);
app.set('views', __dirname + '/public/views');
app.set('view engine', 'jsx');
app.set('view', renderer.expressView);



var index = function(req, res) {
  res.render('index');
};

app.get('', index);

var PORT = process.env.PORT || 8080;
var server = app.listen(PORT);

console.log("Server listening on port ", PORT);
