const webpack = require('webpack');
// 定义了一些文件夹的路径
const path = require('path');
const ROOT_PATH = path.resolve(__dirname);
const SRC_PATH = path.resolve(ROOT_PATH, 'source');
const BUILD_PATH = path.resolve(ROOT_PATH, 'bundle');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: `${__dirname}/index.html`,
  filename: 'indexbundle.html',
  inject: 'body'
});

module.exports = {
  devtool: 'eval-source-map',
  resolve: {
    extensions: [
      '',
      '.js',
      '.json',
      '.css'
    ]
  },
  entry: [
    './source/index.js'
  ],
  output: {
    path: `${__dirname}/bundle/`,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'style-loader?sourceMap',
          'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!postcss-loader?sourceMap'
        )
      },
      {
        test: /\.jpg|\.png|\.woff|\.woff2|\.svg|.eot|\.ttf/,
        loader: 'url-loader?limit=8192'
      }
    ]
  },
  postcss: () => {
    return [
      require('postcss-import')({ addDependencyTo: webpack }),
      require('postcss-url')(),
      require('postcss-cssnext')({
        features: {
          autoprefixer: { browsers: ['> 5%'] }
        }
      })
    ];
  },
  devServer: {
    inline: true,
    port: 8008
  },
  plugins: [
    // 为组件分配ID，通过这个插件webpack可以分析和优先考虑使用最多的模块，并为它们分配最小的ID
    new webpack.optimize.OccurenceOrderPlugin(),
    // HTMLWebpackPluginConfig,
      new webpack.optimize.CommonsChunkPlugin('common.js'),
    new ExtractTextPlugin('index.css')
  ]
};
