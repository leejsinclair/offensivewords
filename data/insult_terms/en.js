const escapeStringRegexp = require('escape-string-regexp')

let words = ["pitiful",
    "lousy",
    "stinking",
    "disgust",
    "distusting",
    "stupid",
    "ugly",
    "red light district",
    "crd",
    "bbfbbm",
    "cinba",
    "diaf",
    "hbic",
    "idgara",
    "nwal",
    "rci",
    "saia",
    "wthow"
];

// Ensure words are regex safe
let regexSafeWords = words.map(
    (word) => {
        return escapeStringRegexp(word)
    }
)

module.exports = regexSafeWords