const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');

const config = require('./webpack.base.config.js');
const options = {
  contentBase: './dist',
  hot: true,
  host: 'localhost',
  noInfo: true
};

webpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new webpackDevServer(compiler, options);

server.listen(9000, 'localhost', () => {
  console.log('dev server listening on port 9000');
});
