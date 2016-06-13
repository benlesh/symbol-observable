/* global window */
import ponyfill from './ponyfill';

var root = this;
if (typeof global !== 'undefined') {
	root = global;
} else if (typeof window !== 'undefined') {
	root = window;
}

var result = ponyfill(root);
// being explicit
result['default'] = result;
export default result;
