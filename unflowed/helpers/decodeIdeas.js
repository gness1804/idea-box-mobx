//      

const replaceWithString = (qual        )         => {
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

const decodeIdeas = (ideas               )                => {
  return ideas.map((i        ) => {
    return Object.assign(i, { quality: replaceWithString(i.quality) });
  });
};

export default decodeIdeas;