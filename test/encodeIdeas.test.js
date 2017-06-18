/*global it, describe*/

const assert = require('chai').assert;
const encodeIdeas = require('../unflowed/helpers/encodeIdeas');
const fakeIdeas = require('./helpers/fakeIdeas');

describe('encodeIdeas', () => {
  it('is a function', () => {
    assert.isFunction(encodeIdeas);
  });

  it('returns the correct output for the first item', () => {
    assert.strictEqual(encodeIdeas(fakeIdeas)[0].quality, 2);
  });
});
