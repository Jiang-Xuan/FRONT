function InsertManifestJSON() {
  this.options = {
    name: 'manifestJSON'
  }
}


InsertManifestJSON.prototype.apply = function(compiler) {
  let me = this
  compiler.plugin('compilation', function(compilation) {
    compilation.plugin('html-webpack-plugin-before-html-generation', function(htmlPluginData, callback) {

      let name = me.options.name
      let manifestJSON = []
      let assets = htmlPluginData.assets
      let value = compilation.assets['manifest.json']._value

      manifestJSON.push('<script>window.webpackManifest=')
      manifestJSON.push(value)
      manifestJSON.push('</script>')

      assets[name] = manifestJSON.join('')
      callback(null, htmlPluginData)
    })
  })
}

module.exports = InsertManifestJSON
