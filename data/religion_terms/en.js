const escapeStringRegexp = require('escape-string-regexp')

let words = [
    "bible",
    "religion",
    "christianity",
    "jesus",
    "nazareth",
    "jew",
    "jews",
    "christ",
    "god",
    "satan",
    "jewism",
    "Islam",
    "Muslim",
    "Muslimism",
    "church",
    "priest",
    "cult",
    "doctrine",
    "sect",
    "orthodoxy",
    "pietism",
    "piety",
    "religiosity",
    "sanctification",
    "veneration"
];

// Ensure words are regex safe
let regexSafeWords = words.map(
    (word) => {
        return escapeStringRegexp(word)
    }
)

module.exports = regexSafeWords