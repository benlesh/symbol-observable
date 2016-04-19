/* global describe, it */
var expect = require('chai').expect;
var ponyfill = require('../ponyfill');

describe('ponyfill unit tests', function () {
  describe('when Symbol does NOT exist as a function', function () {
    it('should return "@@observable"', function () {
      expect(ponyfill({})).to.equal('@@observable');
    });
  });

  describe('when Symbol exists as a function', function () {
    describe('and Symbol.observable exists', function () {
      it('should return Symbol.observable', function () {
        var Symbol = function () {};
        Symbol.observable = 'I came from Symbol.observable';
        var root = { Symbol: Symbol };

        var result = ponyfill(root);

        expect(result).to.equal(Symbol.observable);
      });
    });

    describe('and Symbol.observable does NOT exist', function () {
      describe('and Symbol.for exists', function () {
        it('should use Symbol.for, polyfill Symbol.observable and return it', function () {
          var Symbol = function () {};
          Symbol.for = function (name) {
            return 'Symbol.for(' + name + ')';
          };
          var root = {
            Symbol: Symbol
          };

          var result = ponyfill(root);

          expect(Symbol.observable).to.equal('Symbol.for(observable)');
          expect(result).to.equal('Symbol.for(observable)');
        });
      });

      describe('and Symbol.for does NOT exist', function () {
        it('should use Symbol(), polyfill Symbol.observable and return it', function () {
          var Symbol = function (description) {
            return 'Symbol(' + description + ')';
          };
          var root = {
            Symbol: Symbol
          };

          var result = ponyfill(root);

          expect(Symbol.observable).to.equal('Symbol(observable)');
          expect(result).to.equal('Symbol(observable)');
        });
      });
    });
  });
});
