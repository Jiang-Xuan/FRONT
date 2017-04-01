const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const output = path.resolve(__dirname, 'dist')
const src = path.resolve(__dirname, 'src')

const config = {
  // https://doc.webpack-china.org/configuration/entry-context/
  entry: {
    index: [path.resolve(src, 'index.js')]
  },
  // https://doc.webpack-china.org/configuration/output/
  output: {
    filename: '[name].[hash:5].js',
    path: output
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
    }, {
      test: /.css$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader'
      }, {
        loader: 'less-loader'
      }]
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/view/index.html')
    })
  ]
}

module.exports = config
