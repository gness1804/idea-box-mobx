// @flow

const replaceWithInt = (qual: string): number => {
  const nums = {
    Swill: 1,
    Plausible: 2,
    Genius: 3,
  };
  return nums[qual];
};

const encodeIdeas = (ideas: Array<Object>): Array<Object> => {
  return ideas.map((i: Object) => {
    return Object.assign(i, { quality: replaceWithInt(i.quality) });
  });
};

module.exports = encodeIdeas;
