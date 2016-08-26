const { Transform } = require('stream')
const { split, map } = require('event-stream')
const [,,...cliArgs] = process.argv

// const limiter = Transform({
//   transform(buf, _, cb) {
//     // console.log(buf.toString())
//
//     setTimeout(() => {cb(null, `${buf.toString()}\n`)}, 500)
//   }
// })

const limiter = map((line, cb) => {
                  //do something with the line
                  if ( line.toString().startsWith(cliArgs[0]) ) {
                    // console.log(line.toString())
                    cb(null, line.toString())
                  }
                  cb()
                })



module.exports = limiter
