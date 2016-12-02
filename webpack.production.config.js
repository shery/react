const webpack = require('webpack');
// 定义了一些文件夹的路径
// const path = require('path');
// const ROOT_PATH = path.resolve(__dirname);
// const APP_PATH = path.resolve(ROOT_PATH, 'source');
// const BUILD_PATH = path.resolve(ROOT_PATH, 'build');

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
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader',
        )
      },
      {
        test: /\.jpg|\.png|\.woff|\.woff2|\.svg|.eot|\.ttf/,
        loader: 'url-loader?limit=8192'
      }
    ]
  },
  postcss: (webpack) => {
    return [
      require('postcss-import')({ addDependencyTo: webpack }),
      require('postcss-url')(),
      require('postcss-cssnext')({
        features: {
          autoprefixer: { browsers: ['> 0.01%'] }
        }
      }),
      require('cssgrace')
    ];
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({ minimize: true }),
    new ExtractTextPlugin('index.css', {
      allChunks: true
    })
  ]
};
