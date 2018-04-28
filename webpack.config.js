var path = require('path');
var WriteFilePlugin = require('write-file-webpack-plugin');
module.exports = {
  entry: './src/client.js',
  output: {
    filename: 'bundle.js'
  },
  // assumes all JavaScript files you edit will be in src/
  // when importing from src/<file>.js, only need to specify as <file>
  resolve: {
    root: path.resolve('./src'), // must be absolute path
    extensions: ['', '.js']
  },
  devtool: 'source-map', // source maps to ease debugging
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy', new WriteFilePlugin()],
        }
      }
    ]
  }
};