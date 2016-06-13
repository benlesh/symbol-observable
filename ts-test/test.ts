import $$symbolObservable from '../';

console.log('***********************');
console.log('RUNNING TYPESCRIPT TEST');
console.log('***********************');

if (typeof $$symbolObservable !== 'symbol' && <any>$$symbolObservable !== '@@observable') {
  throw new Error('Sorry, $symbolObservable is ' + JSON.stringify($$symbolObservable));
}
