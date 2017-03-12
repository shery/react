const config = require('./config');
const webpack = require('webpack');
// 定义了一些文件夹的路径
const path = require('path');

const ROOT_PATH = path.resolve(__dirname);
const SRC_PATH = path.resolve(ROOT_PATH, 'source');
const BUILD_PATH = path.resolve(ROOT_PATH, 'docs');
const TEM_PATH = path.resolve(SRC_PATH, 'templates');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const IndexPage = new HtmlWebpackPlugin({
  template: path.resolve(TEM_PATH, 'index.html'),
  filename: 'index.html',
  chunks: ['index', 'commons'],
  inject: 'body'
});

const env = config.build.env;
const ctx = { parser: true, map: 'inline' };

module.exports = {
  devtool: 'eval-source-map',
  resolve: {
    extensions: [
      '.js',
      '.json',
      '.css'
    ]
  },
  entry: {
    index: path.resolve(SRC_PATH, 'index.js')
  },
  output: {
    path: BUILD_PATH,
    filename: 'js/[name].[hash:5].js'
  },
  externals: {
    jquery: 'window.$'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                modules: true,
                importLoaders: 1,
                localIdentName: '[path]_[name]_[local]_[hash:base64:5]'
              }
            },
            'postcss-loader'
          ]
        })
      },
      {
        test: /\.jpg|\.png|\.woff|\.woff2|\.svg|.eot|\.ttf/,
        loader: 'url-loader?limit=8192'
      }
    ]
  },
  devServer: {
    contentBase: BUILD_PATH,
    inline: true,
    port: 8008
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'commons',
      filename: 'js/commons.[hash:5].js'
    }),
    new ExtractTextPlugin({
      filename: 'css/[name].[hash:5].css',
      disable: false,
      allChunks: true
    }),
    IndexPage
  ]
};
