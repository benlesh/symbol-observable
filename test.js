import test from 'ava';
import zenObservable from 'zen-observable';
import m from './';

// for `zen-observable` on Node.js 0.10
global.Promise = Promise;

test(t => {
	t.is(typeof zenObservable.of(1, 2)[m]().forEach, 'function');
});
