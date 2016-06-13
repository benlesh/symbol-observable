import $$symbolObservable from '../';

console.log('RUNNING TYPESCRIPT TEST...');

if (typeof $$symbolObservable !== 'symbol' && <any>$$symbolObservable !== '@@observable') {
  console.log('FAIL');
  throw new Error('Sorry, $symbolObservable is ' + JSON.stringify($$symbolObservable));
}

console.log('PASS');
