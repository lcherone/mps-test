require('make-promises-safe').abort = true

const foo = require('./module/foo.js')
const bar = require('./module/bar.js')
const baz = require('./module/baz.js')
const mymodule = require('mymodule')

function doStuff() {
    try {
        mymodule.doStuff()
    } catch {
        // never hits
        console.log('external module caught')
    }

    try {
        foo.doStuff()
        bar.doStuff()
        baz.doStuff()
    } catch {
        // never hits
        console.log('local module caught')
    }
}

doStuff()
