/* global window */
'use strict';

var root = this;
if (typeof global !== 'undefined') {
	root = global;
} else if (typeof window !== 'undefined') {
	root = window;
}
module.exports = require('./ponyfill')(root);