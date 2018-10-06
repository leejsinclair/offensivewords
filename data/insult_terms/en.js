const escapeStringRegexp = require('escape-string-regexp')

let words = [
    "pitiful",
    "lousy",
    "stinking",
    "disgust",
    "distusting",
    "esad",
    "stupid",
    "ugly",
    "red light district",
    "crd",
    "bbfbbm",
    "cinba",
    "diaf",
    "gafc",
    "gtfo",
    "ffs",
    "hbic",
    "idgara",
    "nwal",
    "rci",
    "saia",
    "stfu",
    "wthow"
];

// Ensure words are regex safe
let regexSafeWords = words.map(
    (word) => {
        return escapeStringRegexp(word)
    }
)

module.exports = regexSafeWords