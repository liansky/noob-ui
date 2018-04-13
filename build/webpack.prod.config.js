/**
 * webpack 生产配置
 */
const path = require('path');
const webpack = require('webpack');
const config = require('./config');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const devWebpackConfig = merge(baseWebpackConfig, {
  plugins: [
    new CleanWebpackPlugin(['dist']), // 清除生产目录

    // 参考 https://github.com/kangax/html-minifier#options-quick-reference
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      inject: true,
      minify: {                       // 压缩配置
        removeComments: true,         // 删除html中的注释代码
        collapseWhitespace: true,     // 删除html中的空白符
        removeAttributeQuotes: true   // 删除html元素中属性的引号
      },
      chunksSortMode: 'dependency'    // 按dependency的顺序引入
    }),

    // 提取公共包
    new webpack.optimize.SplitChunksPlugin({
      chunks: "all",
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      name: true,
      cacheGroups: {
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        }
      }
    })
  ]
});

module.exports = devWebpackConfig;
