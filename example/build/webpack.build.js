const path   = require('path');
const config = require('./webpack.config');

config.entry = { 'example': './src/index.js' };

config.output = {
  filename     :'example.js',
  path         : path.join(__dirname, '../dist'),
  library      : 'example',
  libraryTarget: 'umd'
};


module.exports = config;
