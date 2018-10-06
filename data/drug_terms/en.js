const escapeStringRegexp = require('escape-string-regexp')

let words = [
    "drunk",
    "inebriated",
    "beer",
    "alchocol",
    "pie-eyed",
    "plastered",
    "fuddled",
    "blotto",
    "blind drunk",
    "pissed",
    "slopped",
    "sloshed",
    "soaked",
    "soused",
    "sozzled",
    "squiffy",
    "stiff",
    "tiddly",
    "tipsy",
    "boozy",
    "drunken",
    "sottish",
    "doped",
    "drugged",
    "drugs",
    "dope",
    "medicate",
    "stoned",
    "hopped-up"
];

// Ensure words are regex safe
let regexSafeWords = words.map(
    (word) => {
        return escapeStringRegexp(word)
    }
)

module.exports = regexSafeWords