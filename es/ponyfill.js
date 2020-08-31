
const observableSymbols = new WeakMap();

export default function symbolObservablePonyfill(root) {
	var result = observableSymbols.get(root);
	if (result) {
		return result;
	}

	var Symbol = root.Symbol;
	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
		}
	} else {
		result = '@@observable';
	}

	observableSymbols.set(root, result);
	return result;
};
