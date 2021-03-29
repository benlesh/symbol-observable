/* global describe, it */
var expect = require('chai').expect;
var ponyfill = require('../lib/ponyfill').default;

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
      it('should use Symbol.for(), polyfill Symbol.observable and return it', function () {
        
        var FakeSymbol = createFakeSymbolImpl();
        var root = {
          Symbol: FakeSymbol
        };

        var result = ponyfill(root);

        expect(FakeSymbol.observable).to.equal('@@_fakesymbol_0_https://github.com/benlesh/symbol-observable');
        expect(result).to.equal('@@_fakesymbol_0_https://github.com/benlesh/symbol-observable');
      });


      it('should use Symbol if Symbol.for does not exist', function() {
        var FakeSymbol = createFakeSymbolImpl();
        delete FakeSymbol.for;
        var root = {
          Symbol: FakeSymbol
        };

        var result = ponyfill(root);

        expect(FakeSymbol.observable).to.equal('@@_fakesymbol_0_https://github.com/benlesh/symbol-observable');
        expect(result).to.equal('@@_fakesymbol_0_https://github.com/benlesh/symbol-observable');
      });

      it('should not throw if Symbol is frozen', function () {
        'use strict';
        var FakeSymbol = createFakeSymbolImpl();

        Object.freeze(FakeSymbol);
        var root = {
          Symbol: FakeSymbol
        };

        // If this throws, the test fails.
        var result = ponyfill(root);

        expect(FakeSymbol.observable).not.to.equal('@@_fakesymbol_0_https://github.com/benlesh/symbol-observable');
        expect(result).to.equal('@@_fakesymbol_0_https://github.com/benlesh/symbol-observable');
      });
    });
  });
});


function createFakeSymbolImpl() {
  var symbolCounter = 0;
  function FakeSymbol(description) {
    return '@@_fakesymbol_' + (symbolCounter++) + '_' + description;
  }

  var forLookup = {};

  FakeSymbol.for = function (id) {
    if (!forLookup[id]) {
      forLookup[id] = FakeSymbol(id);
    }
    return forLookup[id];
  };

  return FakeSymbol;
}
