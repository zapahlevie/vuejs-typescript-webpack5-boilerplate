const paths = require('./paths')
const common = require('./webpack.common.js');
const webpack = require('webpack');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
  // set the mode to development or production
  mode: 'development',
  // control how source maps are generated
  devtool: 'inline-source-map',
  // spin up a server for quick development
  devServer: {
    historyApiFallback: true,
    static: paths.build,
    open: true,
    compress: true,
    hot: true,
    port: 8080
  },
  plugins: [
    // only update what has changed on hot reload
    new webpack.HotModuleReplacementPlugin()
  ]
})