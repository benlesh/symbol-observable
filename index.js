'use strict';

if (typeof Symbol === 'function') {
	if (!Symbol.observable) {
		Object.defineProperty(Symbol, 'observable', {
			value: Symbol('observable')
		});
	}

	if (Symbol.observable) {
		module.exports = Symbol.observable;
	} else if (typeof Symbol.for === 'function') {
		module.exports = Symbol.for('observable');
	}
} else {
	module.exports = '@@observable';
}
