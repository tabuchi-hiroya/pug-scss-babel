var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/scripts/main.js',
  output: {
    filename: './dist/scripts/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        loader: "babel"
      }
    ]
  }
}
