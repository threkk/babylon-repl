const fs = require('fs')
const path = require('path')
const process = require('process')

function read (parser, route) {
  let filePath = route
  if (!path.isAbsolute(route)) {
    filePath = path.join(process.cwd(), route)
  }

  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      console.error(`${filePath} could not be read.`)
      process.exit(1)
    }

    const output = parser(data)
    if (output != null) {
      console.log(`${output}`)
      process.exit(0)
    } else {
      console.error(`The input could not be parsed.`)
      process.exit(1)
    }
  })
}

module.exports = {
  read
}
