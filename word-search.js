#!/usr/bin/env node
'use strict'

// node/3rd party modules
const { createReadStream } = require('fs'),
            { split, map } = require('event-stream'),
            [,,...cliArgs] = process.argv,

// my modules
                limitToTen = require('./limit-ten'),
               hackerTyper = require('./hacker-typer')

// if cli arguments are passed run this code block
if (cliArgs[0]) {
  const   wordList = '/usr/share/dict/words',
        readStream = createReadStream(wordList)
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
    .pipe(hackerTyper) // either/or hackerTyper/stdout. Not both
    // .pipe(process.stdout)
} else {
    console.log('No arguments found!\nUsage: word-search [search term]')
}
