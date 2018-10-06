let fs = require('fs')
const escapeStringRegexp = require('escape-string-regexp')

// Read file into an array
let words = fs.readFileSync( `${__dirname}/en`).toString().split('\n')

// Ensure words are regex safe
let regexSafeWords = words.map(
    (word) => {
        return escapeStringRegexp(word)
    }
)

module.exports = regexSafeWords