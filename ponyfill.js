'use strict';

module.exports = function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			if (typeof Symbol['for'] === 'function') {
				result = Symbol['for']('observable');
			} else {
				result = Symbol('observable');
			}
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};
