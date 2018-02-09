const babylon = require('babylon')
const cardinal = require('cardinal')
const supportsColor = require('supports-color')
const util = require('util')

const CONFIG = {
  allowImportExportEverywhere: true,
  sourceType: 'module',
  ranges: true
}

function createParser (plugins = []) {
  const config = Object.assign({}, CONFIG, { plugins })
  return (code, linenos = false) => {
    try {
      const ast = babylon.parse(code, config)
      const fullProgram = util.inspect(ast.program.body, { depth: null })

      let output = fullProgram
      if (supportsColor.stdout) {
        output = cardinal.highlight(fullProgram, { linenos })
      }

      return output
    } catch (e) {
      return null
    }
  }
}

module.exports = {
  createParser
}
