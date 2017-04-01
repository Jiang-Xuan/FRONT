const path = require('path')
const webpack = require('webpack')
const config = require('./webpack.common.js')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')

let extractCss = new ExtractTextWebpackPlugin('[name].[contenthash:20].css')

config.module.rules = [
  {
    test: /.js(?:x)?$/,
    use: [{
      loader: 'babel-loader',
      options: {

      }
    }],
    exclude: path.resolve(__dirname, 'node_modules'),
    include: path.resolve(__dirname, 'src')
  }, {
    test: /.css$/,
    use: ExtractTextWebpackPlugin.extract({
      fallback: 'style-loader',
      use: 'css-loader'
    })
  }
]

config.output.filename = '[name].[chunkhash].js'

config.plugins = [
  ...config.plugins,
  extractCss
]

module.exports = config
