var path = require('path');

module.exports = {
  environment_variables: {
    'process.env.BACKEND_HOST': process.env.BACKEND_HOST ? JSON.stringify(process.env.BACKEND_HOST) : 'undefined',
    'process.env.NODE_ENV': process.env.NODE_ENV ? JSON.stringify(process.env.NODE_ENV) : 'undefined'
  },
  output: {
    path: path.join(__dirname, 'public', 'build'),
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  loaders: [
    { test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },
    {
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src')
    },
    {
      test: /\.(png|jpg)$/,
      //loader: 'url-loader?limit=8192'
      loader: 'file-loader'
    },
    {
      test: /\.(eot|svg|gif)\??.*$/,
      loader: 'file-loader'
    },
    {
      test: /\.styl$/,
      loader: 'style-loader!css-loader!autoprefixer-loader?browsers=last 2 version!stylus-loader'
    },
    {
      test: /\.woff.*$/,
      loader: 'url-loader?limit=10000&minetype=application/font-woff'
    },
    {
      test: /\.ttf$/,
      loader: 'url-loader?limit=10000&minetype=application/font-ttf'
    },
    {
      test: /\.otf$/,
      loader: 'url-loader?limit=10000&minetype=application/font-otf'
    },

    { test: /\.css$/, loader: 'style-loader!css-loader' },
  ]
};
