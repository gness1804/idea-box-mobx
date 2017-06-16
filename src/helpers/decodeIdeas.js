// @flow

const replaceWithString = (qual: number): string => {
  let result;
  if (qual === 1) {
    result = 'Swill';
  } else if (qual === 2) {
    result = 'Plausible';
  } else {
    result = 'Genius';
  }
  return result || 'Swill';
};

const decodeIdeas = (ideas: Array<Object>): Array<Object> => {
  return ideas.map((i: Object) => {
    return Object.assign(i, { quality: replaceWithString(i.quality) });
  });
};

export default decodeIdeas;