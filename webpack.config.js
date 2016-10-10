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
        // query: {
        //   presets: ['es2015', 'react'],
        // },
      },
      {
          test: /\.css$/,
          loader: 'style!css!postcss-loader',
      },
    ],
  },
  postcss: [autoprefixer({ browsers: ['last 2 versions'] })],
  devServer: {
    colors: true,
    inline: true,
    port: 8008,
  },
  // plugins: [HTMLWebpackPluginConfig],
};
