/* global window */
import ponyfill from './ponyfill.js';

var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (typeof module !== 'undefined') {
  root = module;
} else {
  root = Function('return this')();
}

var result = ponyfill(root);

root.Symbol = root.Symbol || function Symbol(description) {
  return '@@' + description;
};
root.Symbol.observable = result;

export default result;
