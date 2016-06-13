/* global describe, it */
var expect = require('chai').expect;
var $$observable = require('../').default;

describe('integration test', function () {
	if (typeof Symbol === 'function') {
		describe('when global Symbol exists', function () {
			describe('returned value', function () {
				it('should be of type "symbol"', function () {
					expect($$observable).to.be.a('symbol');
				});
			});

			describe('Symbol.observable', function () {
				if (typeof Symbol.for === 'function') {
					it('should NOT be the same as Symbol.for("observable")', function () {
						expect(Symbol.observable).to.not.equal(Symbol.for('observable'));
					});
				}

				it('should be of type "symbol"', function () {
					expect(Symbol.observable).to.be.a('symbol');
				});
			});
		});
	} else {
		describe('when no global Symbol is present', function () {
			it('should be "@@observable"', function () {
				expect($$observable).to.be.a('string');
				expect($$observable).to.equal('@@observable');
			});
		});
	}
});
