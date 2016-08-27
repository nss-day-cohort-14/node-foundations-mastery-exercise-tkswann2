#!/usr/bin/env node
const { createReadStream, writeStream } = require('fs')
const { Writable } = require('stream')
const { split, map } = require('event-stream')
const blah = require('./limit-ten')


// const wordList = createReadStream('/usr/share/dict/words', 'utf8')

// wordList.pipe(split()).pipe(process.stdout)
const readStream = createReadStream('/usr/share/dict/words')
// const writeStream = Writable({
// })

readStream
  .pipe(split())
  .pipe(blah)
  .pipe(process.stdout)
