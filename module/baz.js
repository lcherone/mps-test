require('make-promises-safe')

function doStuff() {
    if (Math.random() < 0.5) {
        return Promise.reject(new Error('kaboom'))
    }

    return Promise.resolve('hello world')
}

module.exports = {
    doStuff
}
