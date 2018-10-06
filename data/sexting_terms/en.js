const escapeStringRegexp = require('escape-string-regexp')

let words = [
    "xxx",
    "xxxwrds",
    "8",
    "143",
    "bamf",
    "cd9",
    "cu46",
    "d46",
    "dum",
    "gnoc",
    "gypo",
    "gnrn",
    "fay",
    "fmh",
    "kpc",
    "iws",
    "iit",
    "lh6",
    "lhsx",
    "q2c",
    "ruh",
    "tdtm",
    "s2r",
    "nifoc",
    "sorg",
    "p911",
    "paw",
    "pft",
    "pir",
    "pos",
    "psos",
    "prw",
    "rfn",
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