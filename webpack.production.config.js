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

module.exports = {
  resolve: {
    extensions: [
      '',
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
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]!postcss-loader'
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
          autoprefixer: { browsers: [
            'Android >= 4',
            'Chrome >= 20',
            'Firefox >= 24',
            'Explorer >= 9',
            'iOS >= 6',
            'Opera >= 12',
            'Safari >= 6'
          ] }
        }
      })
    ];
  },
  plugins: [
    new webpack.BannerPlugin('Copyright 2017 by shery'),
    new webpack.optimize.UglifyJsPlugin({ minimize: true }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'commons',
      filename: 'js/commons.[hash:5].js'
    }),
    new ExtractTextPlugin('css/[name].[hash:5].css', {
      allChunks: true
    }),
    IndexPage
  ]
};
