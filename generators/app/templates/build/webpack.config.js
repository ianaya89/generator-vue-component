// const webpack = require('webpack');
// const path    = require('path');
// const utils   = require('./utils');

// const projectRoot = path.resolve(__dirname, '../');

// module.exports = {
//   entry: './docs/main.js',

//   output: {
//     path: './docs/build',
//     publicPath: 'docs/build/',
//     filename: 'docs.js'
//   },

//   devtool: 'source-map',

//   resolve: { root: path.resolve('./') },

//   module: {
//     preLoaders: [
//       {
//         test   : /\.vue$/,
//         loader : 'eslint',
//         include: projectRoot,
//         exclude: /node_modules/
//       },
//       {
//         test   : /\.js$/,
//         loader : 'eslint',
//         include: projectRoot,
//         exclude: /node_modules/
//       }
//     ],
//     loaders: [
//       {
//         test: /\.(woff|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
//         loader: 'url?limit=64000'
//       },
//       {
//         test: /\.(png|jpg)$/,
//         loader: 'url?limit=64000'
//       },
//       {
//         test  : /\.vue$/,
//         loader: 'vue'
//       },
//       {
//         test   : /\.js$/,
//         exclude: /node_modules|vue\/src|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
//         loader : 'babel'
//       },
//       {
//         test  : /\.css$/,
//         loader: 'style-loader!css-loader?root=./docs/'
//       },
//       {
//         test  : /\.scss$/,
//         loader: 'style!css!sass'
//       }
//     ]
//   },

//   vue: {
//     loaders: utils.cssLoaders()
//   }
// };


// if (process.env.NODE_ENV === 'production') {
//   delete module.exports.devtool;

//   module.exports.plugins = [
//     new webpack.DefinePlugin({ 'process.env': { NODE_ENV: '"production"' } }),
//     new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } })
//   ];
// }

const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './docs/main.js',

  output: {
    path: './docs/build',
    publicPath: 'docs/build/',
    filename: 'docs.js'
  },

  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [path.resolve(__dirname, './src')]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'scss': 'vue-style-loader!css-loader!sass-loader',
            'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname, './src')
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: false
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
