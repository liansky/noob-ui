/**
 * webpack dev配置
 */
// const path = require('path');
const webpack = require('webpack');
const config = require('./config');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder');

const devWebpackConfig = merge(baseWebpackConfig, {
  devServer: {
    clientLogLevel: 'warning',
    hot: true,
    contentBase: false, // since we use CopyWebpackPlugin.
    compress: true,
    host: config.dev.host,
    port: config.dev.port,
    open: config.dev.autoOpenBrowser,
    overlay: config.dev.errorOverlay
      ? { warnings: false, errors: true }
      : false,
    publicPath: config.dev.assetsPublicPath,
    proxy: config.dev.proxyTable,
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: config.dev.poll,
    }
  },
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),

    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      inject: true
    })
  ]
});


module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: undefined
      }))

      resolve(devWebpackConfig)
    }
  })
})
