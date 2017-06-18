/*global it, describe*/

const assert = require('chai').assert;
const decodeIdeas = require('../unflowed/helpers/decodeIdeas');

describe('decodeIdeas', () => {
  const encodedIdeas = [
    {
      id: 3,
      name: 'Bake a cake',
      body: 'Go to the store, get the items, then go home and bake the cake.',
      quality: 2,
    },
    {
      id: 2,
      name: 'Build a rocket ship',
      body: 'Build the ship and go to the moon',
      quality: 1,
    },
    {
      id: 1,
      name: 'Build a jigsaw puzzle',
      body: 'Put together all 500 pieces',
      quality: 3,
    },
  ];

  it('is a function', () => {
    assert.isFunction(decodeIdeas);
  });

  it('returns the correct output', () => {
    assert.strictEqual(decodeIdeas(encodedIdeas)[0].quality, 'Plausible');
  });
});
