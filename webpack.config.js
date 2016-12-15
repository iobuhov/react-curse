var path = requier('path')
var port = process.env.PORT || 8080;
var host = process.env.IP || '127.0.0.1'

var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({

  template: __dirname + '/app/index.html',
  filename: 'index.html',
  injet: 'body'

})


module.exports = {

  entry: [
    './app/index.jsx'
  ],

  module: {
    loaders: [
      {test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader'}
    ]
  },

  output: {
    filename: 'index_bundle.js',
    path: __dirname + '/dist'
  },

  plugins: [HtmlWebpackPluginConfig]

}
