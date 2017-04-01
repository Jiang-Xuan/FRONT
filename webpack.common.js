const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// https://github.com/soundcloud/chunk-manifest-webpack-plugin
// 提取webpack运行时候的代码
// 如果不提取在打包的时候一些动态的代码会分散在各个chunk中,导致vendor文件的hash值变化
const ChunkManifestPlugin = require('chunk-manifest-webpack-plugin')
// https://github.com/szrenwei/inline-manifest-webpack-plugin
// 一个单独的manifest文件很小,没必要发送一个单独的HTTP请求,这个模块将其打包成为html文件的内联script块
const InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin')
const vendor = require('./config.js').vendor
const output = path.resolve(__dirname, 'dist')
const src = path.resolve(__dirname, 'src')

// https://doc.webpack-china.org/plugins/extract-text-webpack-plugin/#-
// 为什么要在开发的时候不分割css文件?
// 因为把CSS文件分割出去之后开发中无法热替换CSS样式,要手工刷新
let cssRule = {
  test: /.css$/,
  use: [{
    loader: 'style-loader'
  }, {
    loader: 'css-loader'
  }, {
    loader: 'less-loader'
  }]
}

const config = {
  // https://doc.webpack-china.org/configuration/entry-context/
  entry: {
    index: [path.resolve(src, 'index.js')],
    vendor: vendor
  },
  // https://doc.webpack-china.org/configuration/output/
  output: {
    filename: '[name].[hash:5].js',
    path: output,
    hotUpdateChunkFilename: "[id].[hash:5].hot-update.js"
  },
  // https://doc.webpack-china.org/configuration/module/
  module: {
    rules: [{
      test: /.jsx?$/,
      use: [{
        loader: 'babel-loader',
        options: {

        }
      }],
      exclude: path.resolve(__dirname, 'node_modules'),
      include: path.resolve(__dirname, 'src')
    },
      cssRule
    ]
  },
  // https://doc.webpack-china.org/plugins/
  plugins: [
    // https://doc.webpack-china.org/plugins/commons-chunk-plugin/
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor', 'manifest'],
      minChunks: Infinity
    }),
    // https://doc.webpack-china.org/plugins/html-webpack-plugin/
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/view/index.html')
    }),
    new ChunkManifestPlugin({
      filename: 'manifest.json',
      manifestVariable: 'webpackManifest'
    })
  ]
}

exports.cssRule = cssRule
exports.config = config
