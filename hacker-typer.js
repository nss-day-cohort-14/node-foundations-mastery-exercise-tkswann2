'use strict'

const { Transform } = require('stream')

const hackerTyper = Transform({
  transform(buf, _, cb) {
    let stringArr = buf.toString().split(''),
        letterArr = []
    stringArr.forEach(v => {
      setTimeout(() => {
        letterArr.push(v)}, 50)
    })
  }
})

module.exports = hackerTyper
