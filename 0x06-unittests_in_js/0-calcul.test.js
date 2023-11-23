const assert = require('assert');
const {it, describe} = require('mocha');
const calculateNumber = require('./0-calcul')

describe('calculateNumber', () => {
    it('checking if number round', () => {
        assert.equal(calculateNumber(2, 3), 5);
    });
    it('chacking if numbers round 2nd round', () => {
        assert.equal(calculateNumber(1, 3.8), 5);
    });
    it('checking if numbers round 3rd round', () => {
        assert.equal(calculateNumber(2.2, 3.8), 6);
    });
    it('checking if numbers round 4th round', () => {
        assert.equal(calculateNumber(2.6, 3.6), 7);
    });
    it('chacking negative return', () => {
        assert.equal(calculateNumber(-1.54, -3.8), -5);
    });
});
