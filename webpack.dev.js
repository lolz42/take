const path = require('path');

const merge = require('webpack-merge');
const base = require('./webpack.base.js');

module.exports = merge(base, {

  mode: 'development',
  devtool: 'inline-source-map',

  devServer: {
  contentBase: '/',
  compress: true,
  port: 9000,
   // hot: true
   host : '192.168.0.71',
},



});
