// @flow

const downvoteProcess = (qual: string): string => {
  let result = '';
  if (qual === 'Genius') {
    result = 'Plausible';
  } else if (qual === 'Plausible') {
    result = 'Swill';
  }
  return result || qual;
};

module.exports = downvoteProcess;
