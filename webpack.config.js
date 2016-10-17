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
              'style-loader',
              'css-loader!postcss-loader'
          ),
      },
    ],
  },
  postcss: (webpack) => {
      return [
          require('autoprefixer')({ browsers: ['> 0.01%'] }),
        //   require('cssgrace'),
      ]
  },
  devServer: {
    inline: true,
    port: 8008,
  },
  plugins: [
    //   new webpack.optimize.CommonsChunkPlugin('common.js'),
    //   new webpack.optimize.UglifyJsPlugin({ minimize: true }),
      new ExtractTextPlugin('index.css')
  ],
};
