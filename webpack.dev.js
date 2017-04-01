const config = require('./webpack.common.js')
const webpack = require('webpack')
const HOST = require('./config').HOST
const PORT = require('./config').PORT

let entry = config.entry

for( let item in entry) {
  entry[item] = [`webpack-dev-server/client?http://${HOST}:${PORT}`, `webpack/hot/dev-server`, ...entry[item]]
}

config.plugins = [
  ...config.plugins,
  new webpack.NamedModulesPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin()
]

module.exports = config
