#!/usr/bin/env node
const { createReadStream } = require('fs')
const { split, map } = require('event-stream')
const blah = require('./limit-ten')


// const wordList = createReadStream('/usr/share/dict/words', 'utf8')

// wordList.pipe(split()).pipe(process.stdout)

const write = string => {console.log(string)}
const readStream = createReadStream('/usr/share/dict/words')

readStream
  .pipe(split())
  .pipe(blah)
  .pipe(process.stdout)
