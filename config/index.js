const path = require('path');
const prodEnv = require('./prod.env');
const devEnv = require('./dev.env');

module.exports = {
  build: {
    env: prodEnv,
    index: path.resolve(__dirname, '../docs/index.html'),
    // assetsRoot: path.resolve(__dirname, '../docs'),
    // assetsSubDirectory: 'static',
    // assetsPublicPath: '/',
    // productionSourceMap: false,
    // productionGzip: false,
    productionGzipExtensions: ['js', 'css']
  },
  dev: {
    env: devEnv,
    port: 8008,
    proxyTable: {}
  }
};
