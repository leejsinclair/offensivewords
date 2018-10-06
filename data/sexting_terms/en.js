const escapeStringRegexp = require('escape-string-regexp')

let words = [
    "xxx",
    "xxxwrds",
    "8",
    "143",
    "cu46",
    "dum",
    "gnoc",
    "gypo",
    "gnrn",
    "fmh",
    "iws",
    "iit",
    "q2c",
    "ruh",
    "tdtm",
    "s2r",
    "nifoc",
    "sorg",
    "jo",
    "paw",
    "pir",
    "pos",
    "yws",
    "wycm",
    "ru18",
    "cd9",
    "code 0",
    "code9",
    "nalopkt"
];

// Ensure words are regex safe
let regexSafeWords = words.map(
    (word) => {
        return escapeStringRegexp(word)
    }
)

module.exports = regexSafeWords