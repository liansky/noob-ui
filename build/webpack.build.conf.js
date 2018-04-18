/**
 * webpack noob-packages打包配置
 */
const path = require('path');
const config = require('./config');
const utils = require('./utils');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ModuleConcatenationPlugin = require('webpack/lib/optimize/ModuleConcatenationPlugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
const isProduction = process.env.NODE_ENV === 'production';

const webpackConfig = merge(baseWebpackConfig, {
  entry: {
    main: './src/index.js'
  },

  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
    filename: isProduction ? 'noob.min.js' : 'noob.js',
    library: 'noob',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },

  // 排除公共包打入bundle中
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  devtool: 'source-map',

  module: {
    rules: utils.styleLoaders({
      sourceMap: true,
      extract: true,
      usePostCSS: true
    })
  },

  plugins: [
    // 开启 Scope Hoisting
    new ModuleConcatenationPlugin(),

    // 将js中引入的css分离的插件
    new ExtractTextPlugin({
      filename: isProduction ? 'noob.min.css' : 'noob.css'
    })
  ]
});


if (isProduction) {
  webpackConfig.plugins.push(
    new OptimizeCSSPlugin({
    cssProcessorOptions: {
      safe: true
    }
  }))
}


if (config.build.bundleAnalyzerReport) {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig;
