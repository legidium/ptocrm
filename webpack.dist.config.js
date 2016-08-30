'use strict';

var webpack = require('webpack');
var path    = require('path');
var config  = require('./webpack.config');

var WebpackMd5Hash    = require('webpack-md5-hash');
var CompressionPlugin = require('compression-webpack-plugin');

config.output = {
  filename: '[name].bundle.js',
  publicPath: '/',
  path: path.resolve(__dirname, 'dist')
};

config.plugins = config.plugins.concat([
  new webpack.DefinePlugin({
    'HMR': false,
    'process.env': {
      'ENV': JSON.stringify('production'),
      'NODE_ENV': JSON.stringify('production'),
      'HMR': false,
    }
  }),

  new webpack.optimize.DedupePlugin(),

  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: true,
      screw_ie8: true
    },
    comments: false,
    sourceMap: false,
    mangle: {
      screw_ie8 : true,
      except: ['$super', '$', 'exports', 'require', 'angular']
    }
  }),

  new CompressionPlugin({
    regExp: /\.css$|\.html$|\.js$|\.map$/,
    threshold: 2 * 1024
  })
]);

module.exports = config;
