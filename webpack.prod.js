const path = require('path')
const webpack = require('webpack')
const config = require('./webpack.common.js').config
const cssRule = require('./webpack.common.js').cssRule
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')

let extractCss = new ExtractTextWebpackPlugin('[name].[contenthash:20].css')

let cssRuleIndex = config.module.rules.indexOf(cssRule)

config.module.rules[cssRuleIndex] = {
  test: /.css$/,
  use: ExtractTextWebpackPlugin.extract({
    fallback: 'style-loader',
    use: 'css-loader'
  })
}

config.output.filename = '[name].[chunkhash].js'

config.plugins = [
  ...config.plugins,
  extractCss
]


module.exports = config
