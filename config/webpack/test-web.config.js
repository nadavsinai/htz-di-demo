process.env.NODE_ENV = process.env.BABEL_ENV = 'test';
const webpackMerge = require('webpack-merge');
const webpackCommon = require('./common.config');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const testGlobals = require('./../eslint-test-globals.js');

module.exports = webpackMerge(webpackCommon, {
  devtool: 'inline-source-map',
  performance: {
    hints: false
  },
  plugins: [
    new LoaderOptionsPlugin({
      minimize: false,
      debug: false,
      options: {
        eslint: {
          globals: testGlobals
        }
      }
    })]
});
