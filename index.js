const interactive = require('./lib/interactive')
const file = require('./lib/file')
const stdin = require('./lib/stdin')
const engine = require('./lib/engine')

const parser = engine.createParser()
stdin.read(parser)
