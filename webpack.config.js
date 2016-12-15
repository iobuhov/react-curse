var path = require('path')
var port = process.env.PORT || 8080;
var host = process.env.IP || '127.0.0.1'
var webpack = require('webpack');
var DotenvPlugin = require("dotenv-webpack")
var dotenvplugin = new DotenvPlugin({
  path: './.env',
});
var HtmlWebpackPlugin = require('html-webpack-plugin');
var htmlwebpackplugin = new HtmlWebpackPlugin({

  template: __dirname + '/app/index.html',
  filename: 'index.html',
  injet: 'body'

})

module.exports = {

  entry: [
    './app/index.jsx'
  ],

  node: { fs: "empty" },
  
  module: {
    loaders: [
      {test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader'}
    ]
  },

  output: {
    filename: 'index_bundle.js',
    path: __dirname + '/dist'
  },
  plugins: [
    htmlwebpackplugin,
    dotenvplugin
  ],
  
  devServer: {
    port: port,
    host: host
  }

}
