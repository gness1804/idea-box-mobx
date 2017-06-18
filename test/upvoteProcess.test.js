/*global it, describe*/

const assert = require('chai').assert;
const upvoteProcess = require('../unflowed/helpers/upvoteProcess');

describe('upvoteProcess', () => {
  it('is a function', () => {
    assert.isFunction(upvoteProcess);
  });
});
