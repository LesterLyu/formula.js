var webpack = require('webpack');
const path = require('path');

var filename = '[name].min.js';

module.exports = {
  entry: {
    'formula': './index'
  },
  output: {
    path: path.resolve(__dirname, '../dist/'),
    filename: filename,
    library: 'formulajs',
    libraryTarget: 'umd'
  },
  module: {
    noParse: function(content) {
      return /numbro\/languages/.test(content);
    }
  },
  plugins: [
    // Ignore all locale files of moment.js
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ],
  optimization: {
    minimize: true
  }
};
