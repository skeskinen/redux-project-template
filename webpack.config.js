var webpack = require('webpack');
var common = require('./webpack.common.config');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3300',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: common.output,
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin(common.environment_variables)
  ],
  module: {
    loaders: common.loaders
  }
};
