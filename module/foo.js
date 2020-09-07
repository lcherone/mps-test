
const mps = require('make-promises-safe')

mps.abort = true
mps.logError = console.log

function doStuff() {
    if (Math.random() < 0.5) {
        return Promise.reject(new Error('kaboom'))
    }

    return Promise.resolve('hello world')
}

module.exports = {
    doStuff
}
