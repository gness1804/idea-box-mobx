// @flow

const upvoteProcess = (qual: string): string => {
  let result = '';
  if (qual === 'Swill') {
    result = 'Plausible';
  } else if (qual === 'Plausible') {
    result = 'Genius';
  }
  return result || qual;
};

export default upvoteProcess;
