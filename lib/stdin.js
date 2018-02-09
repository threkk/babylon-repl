const process = require('process')

const isStdIn = () => !process.stdin.isTTY

function read (parser) {
  let data = ''

  process.stdin.on('readeable', () => (data = ''))
  process.stdin.on('data', chunk => (data += chunk))
  process.stdin.on('end', () => {
    const output = parser(data)

    if (output != null) {
      console.log(output)
      process.exit(0)
    } else {
      console.error('The input could not be parsed.')
      process.exit(1)
    }
  })
}

module.exports = {
  isStdIn,
  read
}
