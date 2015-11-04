var Client = require('react-engine/lib/client');

require('./views/**/*.jxs');

var options = {
  viewResolver: function(viewName) {
    return require('./views' + viewName);
  }
};

document.addEventListener('DOMContentLoaded', function onLoad(){
  Client.boot(options);
});
