#! /usr/bin/env node --harmony

const process = require('process')
const program = require('commander')
const { engine, interactive, file, stdin } = require('../lib')
const pkg = require('../package.json')

const plugins = []
const parser = engine.createParser(plugins)

program
  .version(pkg.version)
  .description(pkg.description)
  .usage('[-f <path>]')
  .option('-f, --file <path>', 'Use a file as an input.')
  .parse(process.argv)

if (stdin.isStdIn()) {
  stdin.read(parser)
} else if (program.file !== undefined) {
  file.read(parser, program.file)
} else {
  // console.log('Press <C-d> to send. Press <C-c> to quit.')
  interactive.prompt(parser)
}
