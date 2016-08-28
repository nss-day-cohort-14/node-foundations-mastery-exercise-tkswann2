'use strict'
const { Transform } = require('stream')

let count = 1
const hackerTyper = Transform({
  transform(buf, _, cb) {
    let stringArr = buf.toString().split('')
    stringArr.forEach(v => {
      count++
 		  setTimeout(() => {
        // cb(null, v)
 			    process.stdout.write(v)
 		  }, 100 * count)
    })
    cb()
  }
})

module.exports = hackerTyper
