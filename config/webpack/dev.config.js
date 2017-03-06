const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const webpackCommon = require('./common.config');
const proxyRules = require('./proxy/rules');

// webpack plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const pkgName = require('../getPackageName');
module.exports = function (env) {
  return webpackMerge(webpackCommon, {
    devtool: 'inline-source-map',
    output: {
      library: pkgName.camelCase,
      libraryTarget: 'this',
      path: path.resolve(env.root, 'dist'),
      filename: '[name].min.js',
      sourceMapFilename: '[name].map',
      chunkFilename: '[name]-[id]-chunk.js'
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader',
              options: {
                importLoaders: 2,
                modules: false,
                localIdentName: '[name]__[local]'
              }
            },
            {
              loader: 'sass-loader',
              options: {
                outputStyle: 'expanded',
                sourceMap: true,
                sourceMapContents: true
              }
            }
          ]
        }
      ]
    },
    performance: {
      hints: false
    },
    plugins: [
      new webpack.NamedModulesPlugin(),
      new DefinePlugin({
        'process.env': {
          NODE_ENV: "'development'"
        }
      }),
      new HtmlWebpackPlugin({
        inject: true,
        template: path.resolve(__dirname, '../../static/index.html'),
        favicon: path.resolve(__dirname, '../../static/favicon.ico')
      })
    ],
    devServer: {
      host: 'localhost',
      port: 3000,
      open: true,
      // contentBase: '/static/',
      historyApiFallback: true,
      watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
      },
      proxy: proxyRules
    }
  });
};
