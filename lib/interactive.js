const readline = require('readline')
const process = require('process')
const PROMPT = '$ '

function prompt (parser) {
  const input = []
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: PROMPT
  })

  rl.prompt()

  rl.on('line', line => {
    input.push(line)
  })

  rl.on('close', () => {
    const fullInput = input.join('\n')
    const output = parser(fullInput)

    if (output != null) {
      console.log(`> ${output}`)
    } else {
      console.error(`> The input could not be parsed.`)
    }

    prompt()
  })

  rl.on('SIGINT', () => {
    console.log('> Exiting...')
    process.exit(0)
  })
}

module.exports = {
  prompt
}
