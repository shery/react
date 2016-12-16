const webpack = require('webpack');
// 定义了一些文件夹的路径
// const path = require('path');
// const ROOT_PATH = path.resolve(__dirname);
// const APP_PATH = path.resolve(ROOT_PATH, 'source');
// const BUILD_PATH = path.resolve(ROOT_PATH, 'bundle');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
//   template: `${__dirname}/index.html`,
//   filename: 'indexbundle.html',
//   inject: 'body'
// });

module.exports = {
  devtool: 'eval-source-map',
  resolve: {
    extensions: [
      '',
      '.js',
      '.json',
      '.css',
      '.sass'
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
        test: /\.sass$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
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
    // HTMLWebpackPluginConfig,
    //   new webpack.optimize.CommonsChunkPlugin('common.js'),
    new ExtractTextPlugin('index.css')
  ]
};
