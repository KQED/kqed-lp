var Client = require('react-engine/lib/client');

require('./views/**/*.jxs');

//based on viewname, send back named .jsx template
var options = {
  viewResolver: function(viewName) {
    return require('./views' + viewName);
  }
};

document.addEventListener('DOMContentLoaded', function onLoad(){
  Client.boot(options);
});
