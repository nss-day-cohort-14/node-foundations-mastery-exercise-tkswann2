'use strict'

const { Transform } = require('stream')

let i = 0
const limitToTen = Transform({
  transform(buf, _, cb) {
    if (i < 10) {
      i++
      cb(null, buf.toString())
    } else {
      // drop data after 10 iterations
      cb()
    }
  }

})

module.exports = limitToTen
