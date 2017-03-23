var path = require("path");
var webpack = require("webpack");

var config = {
  entry: {
    app: './assets/scripts/src/app.js'
  },
  output: {
    path: './assets/scripts/dist',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /(node_modules)/
      }
    ],
  },
  resolve: {
    extensions: ["", ".js", ".jsx"]
  }
};

if (process.env.NODE_ENV === 'production') {
  config.plugins = [new webpack.optimize.UglifyJsPlugin({
    compress: { warnings: false }
  })];
}

module.exports = config;
