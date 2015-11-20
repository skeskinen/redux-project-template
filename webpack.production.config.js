var webpack = require('webpack');
var common = require('./webpack.common.config');

module.exports = {
  devtool: 'source-map',
  entry: './src/index',
  output: common.output,
  plugins: [
    new webpack.DefinePlugin(common.environment_variables)
  ],
  module: {
    loaders: common.loaders
  }
};
