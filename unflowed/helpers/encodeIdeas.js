//      

const replaceWithInt = (qual        )         => {
  const nums = {
    Swill: 1,
    Plausible: 2,
    Genius: 3,
  };
  return nums[qual];
};

const encodeIdeas = (ideas               )                => {
  return ideas.map((i        ) => {
    return Object.assign(i, { quality: replaceWithInt(i.quality) });
  });
};

module.exports = encodeIdeas;
