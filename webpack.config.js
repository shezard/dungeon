var path    = require('path');
var webpack = require('webpack');

var BUILD_DIR = path.resolve(__dirname, 'dist/assets/js');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: path.resolve(APP_DIR, 'index.js'),
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      include: APP_DIR,
      loader: 'babel-loader'
    }]
  }
};

module.exports = config;
