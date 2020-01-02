/* global window */
import ponyfill from './ponyfill.js';

var globalScope = Function('return this')()
var root =
  globalScope.self
  || globalScope.window
  || globalScope.global
  || globalScope.module
  || globalScope

var result = ponyfill(root);
export default result;
