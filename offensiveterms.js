var words = require('./data/core_terms/en.js')
var insults = require('./data/insult_terms/en.js');
var religion = require('./data/religion_terms/en.js');
var sexting = require('./data/sexting_terms/en.js');
var drugs = require('./data/drug_terms/en.js');

/**
 * Convert array of words into regular expression
 * @param  {String} listId    ID of words list
 * @param  {Array} wordsList Array of words
 * @return {RegEx}           Regular expression used for matching
 */
function convertWordsToRegExp(wordsList) {
	var regStr = '',
		regExpression;
	// Do not use preset
	for (var i = 0; i < wordsList.length; i++) {
		if (typeof(wordsList[i]) === 'string' && wordsList[i].length > 0) {
			regStr += ((i !== 0) ? '|' : '') + wordsList[i];
		}
	}

	regStr = '\\b(' + regStr + ')\\b';
	//regExpression = regStr;
	regExpression = new RegExp(regStr, "gmi");

	return regExpression;
}

var wordsRe = convertWordsToRegExp(words);
var insultsRe = convertWordsToRegExp(insults);
var sextingRe = convertWordsToRegExp(sexting);
var drugsRe = convertWordsToRegExp(drugs);
var religionRe = convertWordsToRegExp(religion);

function unacceptable(str) {
	str = str.toLowerCase();
	var wordMatch = str.match(wordsRe) || [];
	var insultMatch = str.match(insultsRe) || [];
	var sextingMatch = str.match(sextingRe) || [];
	var drugsMatch = str.match(drugsRe) || [];
	var religionMatch = str.match(religionRe) || [];

	var matches = {
		'offensive': wordMatch,
		'insult': insultMatch,
		'sexting': sextingMatch,
		'drugs': drugsMatch,
		'religion': religionMatch,
		'dangerous': wordMatch.concat(insultMatch, sextingMatch),
		'risky': (drugsMatch)
	};
	
	
	// var matches = (wordMatch || []).concat((insultMatch || []), (sextingMatch || []), (drugsMatch || []), (religionMatch || []));

	matches.offensive = matches.offensive.filter( onlyUnique )
	matches.insult = matches.insult.filter( onlyUnique )
	matches.sexting = matches.sexting.filter( onlyUnique )
	matches.drugs = matches.drugs.filter( onlyUnique )
	matches.religion = matches.religion.filter( onlyUnique )
	matches.dangerous = matches.dangerous.filter( onlyUnique )
	matches.risky = matches.risky.filter( onlyUnique )

	// Ensure lowercase
	return matches;
}

if (module) {
	module.exports = unacceptable;
}

function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}