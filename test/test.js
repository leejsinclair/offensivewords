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
    })
})
