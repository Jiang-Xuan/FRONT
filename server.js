const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('./webpack.dev.js')
const HOST = require('./config').HOST
const PORT = require('./config').PORT

let compiler = webpack(config)

let server = new WebpackDevServer(compiler, {
  hot: true,
  inline: true,
  stats: 'normal'
})

server.listen(PORT)

console.log(`Open http://${HOST}:${PORT}/index.html`)
