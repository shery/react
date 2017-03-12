const webpack = require('webpack');

module.exports = ctx => ({
  parser: ctx.parser ? 'sugarss' : false,
  map: ctx.env === 'development' ? ctx.map : false,
  plugins: {
    'postcss-import': { addDependencyTo: webpack },
    'postcss-url': {},
    'postcss-cssnext': ctx.env === 'production' ? {
      features: {
        autoprefixer: {
          browsers: [
            'Android >= 4',
            'Chrome >= 20',
            'Firefox >= 24',
            'Explorer >= 9',
            'iOS >= 6',
            'Opera >= 12',
            'Safari >= 6'
          ]
        }
      }
    } : false
  }
});
