//      

const upvoteProcess = (qual        )         => {
  let result = '';
  if (qual === 'Swill') {
    result = 'Plausible';
  } else if (qual === 'Plausible') {
    result = 'Genius';
  }
  return result || qual;
};

module.exports = upvoteProcess;
