module.exports = api => {
  api.extendPackage({
    dependencies: {
      'register-service-worker': '^1.0.0'
    }
  })
  api.injectImports(api.entryFile, `import './registerServiceWorker'`)
  api.render('./template')

  if (api.invoking && api.hasPlugin('typescript')) {
    const convertFiles = require('@vue/cli-plugin-typescript/generator/convert')
    convertFiles(api)
  }
}
