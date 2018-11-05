const escapeStringRegexp = require('escape-string-regexp')

let words = [
    "abortion",
	"abuse",
	"abuser",
	"abusive",
	"bashing",
	"bashings",
	"bastard",
	"behead",
	"booty",
	"brawl",
	"brothel",
	"douche",
	"drug",
	"flasher",
	"grope",
	"groped",
	"gropes",
	"hang",
	"headlong",
	"idiot",
	"idiotic",
	"isaccc",
	"islam",
	"jerk",
	"kidnap",
	"kill",
	"killers",
	"lucious",
	"lust",
	"lusty",
	"militant",
	"militants",
	"mistress",
	"murder",
	"pervert",
	"raciest",
	"racist",
	"racy",
	"raped",
	"raunchy",
	"sex",
	"sexiest",
	"sexist",
	"sexting",
	"sextortion",
	"slashed",
	"slaughter",
	"sleaze",
	"smack",
	"spank",
	"stalker",
	"streaker",
	"stripper",
	"stupidity",
	"suck",
	"sucks",
	"sukr",
	"terror",
	"time-bomb",
	"time-bombs",
	"topless",
	"twat",
	"undies",
	"wanker",
	"wtf"
];


// Ensure words are regex safe
let regexSafeWords = words.map(
    (word) => {
        return escapeStringRegexp(word)
    }
)

module.exports = regexSafeWords