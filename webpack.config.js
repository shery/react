const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


// 使用 HtmlWebpackPlugin，将 bundle 好的 <script> 插入到 body。${__dirname} 为 ES6 语法对应的 __dirname
// const HtmlWebpackPlugin = require('html-webpack-plugin');
//
// const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
//   template: `${__dirname}/index.html`,
//   filename: 'indexbundle.html',
//   inject: 'body',
// });

module.exports = {
  devtool: 'eval-source-map',
  resolve: {
      extensions: [
          '',
          '.js',
          '.json',
          '.css',
      ],
  },
  entry: [
    './source/js/index.js',
  ],
  output: {
    path: `${__dirname}/bundle/`,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract(
              'style-loader?sourceMap',
              'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!postcss-loader?sourceMap'
          ),
      },
      {
          test : /\.jpg|\.png|\.woff|\.woff2|\.svg|.eot|\.ttf/,
          loader : 'url-loader?limit=8192'
      },
    ],
  },
  postcss: (webpack) => {
      return [
          require('postcss-import')({ addDependencyTo: webpack }),
          require('postcss-url')(),
          require('postcss-cssnext')({
              features: {
                  autoprefixer: { browsers: ['> 5%'] }
              }
          })
      ]
  },
  devServer: {
    inline: true,
    port: 8008,
  },
  plugins: [
    //   new webpack.optimize.CommonsChunkPlugin('common.js'),
      new ExtractTextPlugin('index.css')
  ],
};
