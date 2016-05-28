/* global window */
import ponyfill from './ponyfill';

let root = this;
if (typeof global !== 'undefined') {
	root = global;
} else if (typeof window !== 'undefined') {
	root = window;
}

export default ponyfill(root);
