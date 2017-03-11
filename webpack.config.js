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
  devtool: 'eval-source-map',
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
  externals: {
    jquery: 'window.$'
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
          'css-loader?modules&importLoaders=1&localIdentName=[path]_[name]_[local]_[hash:base64:5]!postcss-loader?sourceMap'
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
    contentBase: BUILD_PATH,
    inline: true,
    port: 8008
  },
  plugins: [
    // 为组件分配ID，通过这个插件webpack可以分析和优先考虑使用最多的模块，并为它们分配最小的ID
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.CommonsChunkPlugin('commons', 'js/commons.[hash:5].js'),
    new ExtractTextPlugin('css/[name].[hash:5].css'),
    IndexPage
  ]
};
