/*global it, describe*/

const assert = require('chai').assert;
const downvoteProcess = require('../unflowed/helpers/downvoteProcess');

describe('downvoteProcess', () => {
  it('is a function', () => {
    assert.isFunction(downvoteProcess);
  });

  it('returns the correct values', () => {
    assert.strictEqual(downvoteProcess('Genius'), 'Plausible');
    assert.strictEqual(downvoteProcess('Plausible'), 'Swill');
    assert.strictEqual(downvoteProcess('Swill'), 'Swill');
  });
});
