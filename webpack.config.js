const filename = '[name].js';
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    'formula': './index'
  },
  output: {
    path: path.resolve(__dirname, './dist/'),
    filename: filename,
    library: 'formulajs',
    libraryTarget: 'umd'
  },
  plugins: [
    // Ignore all locale files of moment.js
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ],
};
