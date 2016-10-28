const path   = require('path');
const config = require('./webpack.config');

config.entry = { 'hello-world': './src/index.js' };

config.output = {
  filename     :'hello-world.js',
  path         : path.join(__dirname, '../dist'),
  library      : 'hello-world',
  libraryTarget: 'umd'
};


module.exports = config;
