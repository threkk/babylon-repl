const repl = require('repl')
const process = require('process')
const PROMPT = '$ '

function prompt (parser) {
  const replEval = (cmd, context, filename, callback) => {
    console.log(`~> ${parser(cmd)}`)
  }

  const replServer = repl.start({
    prompt: PROMPT,
    eval: replEval
  })

  replServer.context._ = '_'
  replServer.on('exit', () => {
    console.log('~> Exiting...')
    process.exit(0)
  })
}

module.exports = {
  prompt
}
