const path   = require('path');
const config = require('./webpack.config');

config.entry = { '<%= libraryName %>': './src/index.js' };

config.output = {
  filename     :'<%= libraryName %>.js',
  path         : path.join(__dirname, '../dist'),
  library      : '<%= libraryName %>',
  libraryTarget: 'umd'
};


module.exports = config;
