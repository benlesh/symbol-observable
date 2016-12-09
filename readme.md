# symbol-observable [![Build Status](https://travis-ci.org/blesh/symbol-observable.svg?branch=master)](https://travis-ci.org/blesh/symbol-observable)

> [`Symbol.observable`](https://github.com/zenparsing/es-observable) [ponyfill](https://ponyfill.com)


## Install

```
$ npm install --save symbol-observable
```


## Usage

With a CommonJS loader:

```js
const symbolObservable = require('symbol-observable').default;

console.log(symbolObservable);
//=> Symbol(observable)
```

With an ES2015 module loader:

```js
import symbolObservable from 'symbol-observable';

console.log(symbolObservable);
//=> Symbol(observable)
```

With an AMD module loader:

```js
require([ 'symbol-observable' ], function (symbolObservable) {
	console.log(symbolObservable.default);
	//=> Symbol(observable)
});
```

## Related

- [is-observable](https://github.com/sindresorhus/is-observable) - Check if a value is an Observable
- [observable-to-promise](https://github.com/sindresorhus/observable-to-promise) - Convert an Observable to a Promise


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
