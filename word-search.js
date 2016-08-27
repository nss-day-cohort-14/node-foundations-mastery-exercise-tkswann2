#!/usr/bin/env node
'use strict'

// node/3rd party modules
const { createReadStream } = require('fs')
const { split, map } = require('event-stream')
const [,,...cliArgs] = process.argv

// my modules
const limitToTen = require('./limit-ten')


if (cliArgs[0]) {
  const readStream = createReadStream('/usr/share/dict/words')
// piping
  readStream
// bonus #1
// process.stdin
    .pipe(split())
    .pipe(map((line, cb) => {
            // convert input and stream to lowercase for testing purposes
            // test to see if the word in stream begins with the cli argument
            // pass data down stream if they match
            if ( line.toString().toLowerCase().startsWith(cliArgs[0].toLowerCase()) ) {
              cb(null, `${line.toString()}\n`)
            } else {
              // drop data that doesn't match user input
              cb()
            }
          }))
    .pipe(limitToTen)
    .pipe(process.stdout)
} else {
    console.log('No arguments found!\nUsage: word-search [search term]')
}
