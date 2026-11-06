import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('names a perfect fifth', () => {
  assert.deepEqual(api.intervalBetween(60, 67), {
    semitones: 7,
    direction: 'ascending',
    simple: 7,
    octaves: 0,
    name: 'perfect fifth',
  });
});
test('reports descending intervals', () => {
  assert.equal(api.intervalBetween(64, 60).direction, 'descending');
});
test('reports unison', () => {
  assert.equal(api.intervalBetween(60, 60).name, 'unison');
});
test('handles octave compounds', () => {
  const x = api.intervalBetween(60, 79);
  assert.equal(x.octaves, 1);
  assert.equal(x.name, 'perfect fifth');
});
test('inverts major third', () => {
  assert.equal(api.invertInterval(4), 8);
});
test('rejects interval above octave for inversion', () => {
  assert.throws(() => api.invertInterval(13), RangeError);
});
