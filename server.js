/* eslint no-console: 0 */

var express = require('express');
var path = require('path');


var isProduction = process.env.NODE_ENV === 'production';
var port = isProduction ? process.env.PORT : 3300;
var publicPath = path.resolve(__dirname, 'public');

if (!isProduction) {
  var webpack = require('webpack');
  var WebpackDevServer = require('webpack-dev-server');
  var config = require('./webpack.config');

  new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    contentBase: 'public'
  }).listen(3300, 'localhost', function(err) {
    if (err) {
      console.log(err);
    }

    console.log('Listening at http://127.0.0.1:3300');
  });
} else {
  var app = express();

  app.use(express.static(publicPath));

  app.listen(port, function() {
    console.log('Server running on port ' + port);
  });
}
