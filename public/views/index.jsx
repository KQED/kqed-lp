var React = require('react');

var Layout = React.createClass({
  render: function() {
    return (
      <html>
        <head>
          <meta charSet="utf-8" />
          <title>KQED LP</title>
        </head>
        <body>
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.1.4/semantic.css" />
          <div id="app"></div>
          <script src="bundle.js"></script>
        </body>
      </html>
    );
  }
});
module.exports = Layout;
