var assert = require('assert');
var offensiveLanguage = require(__dirname + "/../offensiveterms.js");

describe('offensiveLanguage', () => {
    describe('#default', () => {
        it('should return 0 matches when no terms are present.', () => {
            let testString = 'Lorem ipsum dolor sit amet'
            let result = offensiveLanguage(testString)
            assert.equal(0, result.dangerous.length)
        })

        it('should ignore capitalization.', () => {
            let testString = 'That person is a BastArd.';
            let result = offensiveLanguage(testString);
            assert.equal('bastard', result.dangerous[0]);
            assert.equal(1, result.dangerous.length);
        })

        it('should work with multi word phrases', () => {
            let testString = 'Some sentence containing the barely legal face somewhere in the middle.'
            let result = offensiveLanguage(testString);
            assert.equal('barely legal', result.dangerous[0]);
            assert.equal(1, result.dangerous.length);
        })

        it('should not have duplicate matches', () => {
            let testString = 'The drunken. The drunken.';
            let result = offensiveLanguage(testString);
            assert.equal('drunken', result.risky[0]);
            assert.equal(1, result.risky.length);
        })

        it('religion word test', () => {
            let testString = 'That person is in a cult.';
            let result = offensiveLanguage(testString);
            assert.equal('cult', result.religion[0]);
            assert.equal(1, result.religion.length);
        })

        it('should ignore a match within a larger word', () => {
            let testString = 'some word containing bass in the middle'
            let result = offensiveLanguage(testString);
            assert.equal(0, result.dangerous.length);
        })

        it('At Risk : unmotivated', () => {
            let testString = 'i feel completely unmotivated'
            let result = offensiveLanguage(testString);
            assert.equal(1, result.at_risk.length);
        })

        it('At Risk : with quotes', () => {
            let testString = 'i\'m completely numb'
            let result = offensiveLanguage(testString);
            assert.equal(1, result.at_risk.length);
        })

        it('At risk : felt', () => {
            let testString = 'I felt anxious about todays meeting'
            let result = offensiveLanguage(testString);
            assert.equal(1, result.at_risk.length);
        })

        it('At risk feel overwhelmed', () => {
            let testString = 'i will most likely feel overwhelmed and exhausted again'
            let result = offensiveLanguage(testString);
            assert.equal(1, result.at_risk.length);
        })

        // i will most likely feel overwhelmed and exhausted again

        it('Possibly offensive : jerk', () => {
            let testString = 'yo uare a jerk'
            let result = offensiveLanguage(testString);
            assert.equal(1, result.potentially_offensive.length);
        })

        it('should return empty lists for an empty string', () => {
            let result = offensiveLanguage('');
            Object.keys(result).forEach(key => assert.deepEqual(result[key], []));
        })

        it('should detect insult terms', () => {
            let result = offensiveLanguage('what a stinking lousy day');
            assert.deepEqual(result.insult, ['stinking', 'lousy']);
            assert.deepEqual(result.dangerous, ['stinking', 'lousy']);
        })

        it('should detect sexting terms', () => {
            let result = offensiveLanguage('xxx');
            assert.deepEqual(result.sexting, ['xxx']);
            assert.deepEqual(result.dangerous, ['xxx']);
        })

        it('should detect drug terms as risky', () => {
            let result = offensiveLanguage('he is stoned');
            assert.deepEqual(result.drugs, ['stoned']);
            assert.deepEqual(result.risky, ['stoned']);
            assert.equal(0, result.dangerous.length);
        })

        it('should deduplicate dangerous matches across repeated words', () => {
            let result = offensiveLanguage('Bastard bastard');
            assert.deepEqual(result.offensive, ['bastard']);
            assert.deepEqual(result.dangerous, ['bastard']);
        })
    })
})
