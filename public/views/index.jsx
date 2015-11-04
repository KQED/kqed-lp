import React from 'react';
 
export default class Layout extends React.Component{
  render() {
    return (
      <html>
        <head>
          <meta charSet="utf-8" />
          <title>KQED LP</title>
        </head>
        <body>
          <div id="app"></div>
          <script src="bundle.js"></script>
        </body>
      </html>
    );
  }
};
