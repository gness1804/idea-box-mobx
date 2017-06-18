/*global it, describe*/

const assert = require('chai').assert;
const upvoteProcess = require('../unflowed/helpers/upvoteProcess');

describe('upvoteProcess', () => {
  it('is a function', () => {
    assert.isFunction(upvoteProcess);
  });

  it('returns the correct value for a quality input', () => {
    assert.strictEqual(upvoteProcess('Swill'), 'Plausible');
    assert.strictEqual(upvoteProcess('Plausible'), 'Genius');
    assert.strictEqual(upvoteProcess('Genius'), 'Genius');
  });
});
